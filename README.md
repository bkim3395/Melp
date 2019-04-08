<p align="center">
  <img width="150" height="150" src="https://raw.githubusercontent.com/bkim3395/Melp/master/app/assets/images/newnewlogo.png">
</p>

# Melp

[Melp Live](https://melp-yelp-clone.herokuapp.com/#/)

Melp is a Yelp clone. User can browse restaurants in their local area, look up information about specific business and submit a review optionally with pictures.

# Features

## Registration and Geolocation API

[geoloc-gif]: https://raw.githubusercontent.com/bkim3395/Melp/master/app/assets/images/github%20readme%20images/geoloc.gif "Geolocation Demo"
![alt text][geoloc-gif]

Geolocation API can access a user's location. This location will be used as the center for Google Map API in Search page. If a user refuses to give their location, the default location is used for the center.

## Search and Google Map API

[search-gif]: https://raw.githubusercontent.com/bkim3395/Melp/master/app/assets/images/github%20readme%20images/Search-Demo.gif "Search Demo"
![alt text][search-gif]

User can search for restaurants in their local area. User may leave the search box blank to see all types of restuarants or filter by cuisine or name of the restaurant. In search page, all restaurants filtered by search terms and within the boundary of Google Map API are shown. The markers on the map represent the restaurants shown in the page. If the map is moved or new search term is entered, the list of restaurants will change accordingly.

Below is the code responsible for fetching businesses according to search terms and map boundary.

``` ruby
    def self.bounds_search(term, bounds)

        if(term.include?("%20"))
            arr = term.split("%20")
        else
            arr = term.split(" ")
        end
        new_term = arr.join(" ")

        if(arr.length == 2 && arr[1].downcase == "food")
            cuisine = arr[0].capitalize;
            return Business.with_attached_photos.where(["cuisine iLIKE ? AND (latitude BETWEEN ? AND ?) AND (longitude BETWEEN ? AND ?)", 
                                                        cuisine,
                                                        bounds[:southWest][:lat] ,bounds[:northEast][:lat],
                                                        bounds[:southWest][:lng] ,bounds[:northEast][:lng]])
        elsif(new_term.downcase.include?("coffee") || new_term.downcase.include?("cafe"))
            return Business.with_attached_photos.where(["cuisine = ? AND (latitude BETWEEN ? AND ?) AND (longitude BETWEEN ? AND ?)", 
                                                        "Coffee",
                                                        bounds[:southWest][:lat] ,bounds[:northEast][:lat],
                                                        bounds[:southWest][:lng] ,bounds[:northEast][:lng]])
        else
            result = Business.with_attached_photos.where(["LOWER(name) LIKE ? AND (latitude BETWEEN ? AND ?) AND (longitude BETWEEN ? AND ?",
                                                        "%#{new_term.downcase}%",
                                                        bounds[:southWest][:lat] ,bounds[:northEast][:lat],
                                                        bounds[:southWest][:lng] ,bounds[:northEast][:lng]])
            if(result.length == 0 && arr.length == 1)
                return Business.with_attached_photos.where(["cuisine iLIKE ? AND (latitude BETWEEN ? AND ?) AND (longitude BETWEEN ? AND ?)",
                                                        new_term,  
                                                        bounds[:southWest][:lat] ,bounds[:northEast][:lat],
                                                        bounds[:southWest][:lng] ,bounds[:northEast][:lng]])
            end
            return result
        end    
    end
```

## Business Show Page

[business-1]: https://raw.githubusercontent.com/bkim3395/Melp/master/app/assets/images/github%20readme%20images/business_1.png "Business Page-1"
![alt text][business-1]

[business-2]: https://raw.githubusercontent.com/bkim3395/Melp/master/app/assets/images/github%20readme%20images/business_2.png "Business Page-2"
![alt text][business-2]

In the business show page, a user can browse information about the specific business they selected. It contains Google Map of business's location, its ratings, address, phone number, link to its website and three photos related to the business. If a user is logged in and did not review the business yet, they can press "Write a Review" button to do so. 

Below the section containing the business's information, there are list of reviews on that particular business. Each review contains the reviewer's name, ratings, text, and, optionally, photo if one or more photos were submitted with the review.

## Review Submission Page

[review]: https://raw.githubusercontent.com/bkim3395/Melp/master/app/assets/images/github%20readme%20images/Review%20Submission.gif "Review Submission"
![alt text][review]

On Review submission page, the user must give ratings and review texts to successfully submit a review. Optionally, the user may submit one or more photos related to the review. If the photos exceeds 1mB, the website will warn the user and ask them to submit the review again with less data. If the review was successfully submitted, the user will be redirected to business show page. The ratings of the business would be calculated and updated according to the ratings given in the submitted review.

## Technologies Used
+ Ruby on Rails
+ PostgreSQL
+ JavaScript (ES6)
+ React.js and Redux
+ Amazon S3
+ HTML and CSS

## APIs
+ Google Map Javascript API
+ HTML5 Geolocation API

