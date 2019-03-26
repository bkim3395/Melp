# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  latitude        :float            not null
#  longitude       :float            not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    validates :username, :session_token, :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length:{minimum: 6, allow_nil: true}

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :ratings,
    foreign_key: :author_id,
    class_name: :Rating 

    has_many :reviews,
    foreign_key: :author_id,
    class_name: :Review

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil if user.nil?
        return nil unless user.is_password?(password)
        return user
    end

    
    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end
    
    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end
end
