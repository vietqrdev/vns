#### Image resource

+ image (string) - link of image
+ type (string) - type of image
+ option (object) - option
+ start (timestamp) - start time
+ end (timestamp|null)) - end time

#### GET /images
Get list image

+ Query
    + type (option, string) - type of image
    
+ Respone

        {
            data: []
            paging: {}
        }

#### POST /images
Create image

+ Body
    + image (required, string) - link of image
    + type (required, string) - type of image
    + option (option, object) - option
    + start (option, timestamp) - start time
    + end (option, timestamp|null) - end time
+ Response

        {
            id: string
        }

#### DELETE /images/{id}
Delete image

+ Response

        {
            success: true
        }