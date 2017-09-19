#### Brand resource

+ name (string)
+ logo (string)
+ rank (number)

#### GET /brands
Get list brand
    
+ Respone

        {
            data: []
            paging: {}
        }

#### POST /brands
Create brand

+ Body
    + name (required, string)
    + image (required, string)
+ Response

        {
            id: string
        }

#### DELETE /brands/{id}
Delete brand

+ Response

        {
            data: {
                success: true
            }
        }
