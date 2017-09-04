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
    + logo (required, string)
    + rank (option, number)
+ Response

        {
            id: string
        }

#### DELETE /brands/{id}
Delete brand

+ Response

        {
            success: true
        }