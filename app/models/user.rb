# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  latitude        :float            not null
#  longitude       :float            not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string           not null
#  last_name       :string           not null
#

class User < ApplicationRecord

    validates :session_token, :email, presence: true, uniqueness: true
    validates :password_digest, :first_name, :last_name, presence: true
    validates :password, length:{minimum: 6, allow_nil: true}

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :reviews,
    foreign_key: :author_id,
    class_name: :Review

    has_one_attached :photo

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

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
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

    def self.fetch_avatar
        file0 = File.open("app/assets/images/avatar/cat.png")
        name0 = "cat.png"
        file1 = File.open("app/assets/images/avatar/dog.png")
        name1 = "dog.png"        
        file2 = File.open("app/assets/images/avatar/fox.png")
        name2 = "fox.png"
        file3 = File.open("app/assets/images/avatar/frog.png")
        name3 = "frog.png"
        file4 = File.open("app/assets/images/avatar/monkey.png")
        name4 = "monkey.png"
        file5 = File.open("app/assets/images/avatar/panda.png")
        name5 = "panda.png"
        file6 = File.open("app/assets/images/avatar/penguin.png")
        name6 = "penguin.png"
        file7 = File.open("app/assets/images/avatar/pig.png")
        name7 = "pig.png"        
        file8 = File.open("app/assets/images/avatar/sheep.png")
        name8 = "sheep.png"
        file9 = File.open("app/assets/images/avatar/tiger.png")
        name9 = "tiger.png"
        return([[file0,name0],[file1,name1],[file2,name2],[file3,name3],
    [file4,name4],[file5,name5],[file6,name6],[file7,name7],[file8,name8],
    [file9,name9]])
    end

    def assign_avatar
        avatars = User.fetch_avatar
        avatar = avatars.shuffle[0]
        self.photo.attach(io: avatar[0], filename: avatar[1])
        return self.photo.attached?
    end
end
