<p align="center">
  <img width="150" height="150" src="https://raw.githubusercontent.com/bkim3395/Melp/master/app/assets/images/newnewlogo.png">
</p>

# Melp

[Melp Live](https://melp-yelp-clone.herokuapp.com/#/)

Melp is a Yelp clone. You can browse restaurants in your local area, look up information about specific businesses, including photos of the business, and submit a review optionally with pictures.

# Features

## Registration and Geolocation API

[geoloc-gif]: https://raw.githubusercontent.com/bkim3395/Melp/master/app/assets/images/github%20readme%20images/geoloc.gif "Geolocation Demo"
![alt text][geoloc-gif]

User can give their location to Geolocation API. This location will be used as the center for Google Map API in Search page. If user refuses to give their location, the default location is used for the center.

## Search and Google Map API

[search-gif]: https://raw.githubusercontent.com/bkim3395/Melp/master/app/assets/images/github%20readme%20images/Search-Demo.gif "Search Demo"
![alt text][search-gif]

User can search for restaurants in their local area. User may leave the search box blank to see all types of restuarants or filter by cuisine or name of the restaurant. In search page, all restaurants filtered by search terms and within the boundary of Google Map API are shown. If the map is moved or new search term is entered, the list of restaurants will change accordingly.

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

[business-1]: https://raw.githubusercontent.com/bkim3395/Melp/master/app/assets/images/github%20readme%20images/Business_1.png "Business Page-1"
![alt text][business-1]

In Business show page, user can browse information about the specific business they selected. It contains Google Map of business's location, its ratings, address, phone number, website link and three pictures related to the business. If user is logged in and did not review the business yet, user can press "Write a Review" button to do so. 

[business-2]: https://raw.githubusercontent.com/bkim3395/Melp/master/app/assets/images/github%20readme%20images/Business_2.png "Business Page-2"
![alt text][business-2]

Below the section containing the business's information, there are list of reviews on that particular business.




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

