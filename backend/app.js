const express = require('express')
const path = require('path')
let cors = require("cors");

const app = express()

const port = 8081

app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')))

app.get('/products', (req, res) => {
  res.json([
    {
      "id": 0,
      "title": "Xiaomi 12T 8/128GB niebieski",
      "imageUrl": "http://192.168.0.102:8081/images/0d.jpg",
      
      "price": 2799,
      "attributes": [
        {
          "name": "Przekątna wyświetlacza",
          "value": "6.67 cale"
        },
        {
          "name": "Pamięć Flash",
          "value": "128 GB"
        },
        {
          "name": "System operacyjny",
          "value": "Android 12"
        },
        {
          "name": "Aparat fotograficzny z tyłu",
          "value": "108 Mpix"
        },
        {
          "name": "Drugi aparat fotograficzny z tyłu",
          "value": "8 Mpix"
        },
        {
          "name": "Trzeci aparat fotograficzny z tyłu",
          "value": "2 Mpix"
        },
        {
          "name": "Pamięć RAM",
          "value": "8 GB"
        },
        {
          "name": "Transmisja danych",
          "value": "4G LTE, 5G"
        },
        {
          "name": "Pojemność akumulatora",
          "value": "5000 mAh"
        }
      ]
    },
    {
      "id": 1,
      "title": "Xiaomi 12T Pro 12/256GB czarny",
      "imageUrl": "http://192.168.0.102:8081/images/1d.jpg",
      
      "price": 3999,
      "attributes": [
        {
          "name": "Przekątna wyświetlacza",
          "value": "6.67 cale"
        },
        {
          "name": "Pamięć Flash",
          "value": "256 GB"
        },
        {
          "name": "System operacyjny",
          "value": "Android 12"
        },
        {
          "name": "Aparat fotograficzny z tyłu",
          "value": "200 Mpix"
        },
        {
          "name": "Drugi aparat fotograficzny z tyłu",
          "value": "8 Mpix"
        },
        {
          "name": "Trzeci aparat fotograficzny z tyłu",
          "value": "2 Mpix"
        },
        {
          "name": "Pamięć RAM",
          "value": "12 GB"
        },
        {
          "name": "Transmisja danych",
          "value": "4G LTE, 5G"
        },
        {
          "name": "Pojemność akumulatora",
          "value": "5000 mAh"
        }
      ]
    },
    {
      "id": 2,
      "title": "Samsung Galaxy Z Flip 4 5G 128GB szary (F721)",
      "imageUrl": "http://192.168.0.102:8081/images/2d.jpg",
      
      "price": 5149,
      "attributes": [
        {
          "name": "Przekątna wyświetlacza",
          "value": "6.7 cale"
        },
        {
          "name": "Pamięć Flash",
          "value": "128 GB"
        },
        {
          "name": "Rozdzielczość",
          "value": "2640 x 1080 piksele"
        },
        {
          "name": "Aparat fotograficzny z tyłu",
          "value": "12 Mpix"
        },
        {
          "name": "Drugi aparat fotograficzny z tyłu",
          "value": "12 Mpix"
        },
        {
          "name": "Pamięć RAM",
          "value": "8 GB"
        },
        {
          "name": "Transmisja danych",
          "value": "4G LTE, 5G"
        },
        {
          "name": "Pojemność akumulatora",
          "value": "3700 mAh"
        },
        {
          "name": "Kolor",
          "value": "szary"
        }
      ]
    },
    {
      "id": 3,
      "title": "Samsung Galaxy A13 64GB Dual SIM niebieski (A137)",
      "imageUrl": "http://192.168.0.102:8081/images/3d.jpg",
      
      "price": 849,
      "attributes": [
        {
          "name": "Przekątna wyświetlacza",
          "value": "6.6 cale"
        },
        {
          "name": "Pamięć Flash",
          "value": "64 GB"
        },
        {
          "name": "System operacyjny",
          "value": "Android 12"
        },
        {
          "name": "Aparat fotograficzny z tyłu",
          "value": "50 Mpix"
        },
        {
          "name": "Drugi aparat fotograficzny z tyłu",
          "value": "5 Mpix"
        },
        {
          "name": "Trzeci aparat fotograficzny z tyłu",
          "value": "2 Mpix"
        },
        {
          "name": "Pamięć RAM",
          "value": "4 GB"
        },
        {
          "name": "Transmisja danych",
          "value": "4G LTE"
        },
        {
          "name": "Pojemność akumulatora",
          "value": "5000 mAh"
        }
      ]
    },
    {
      "id": 4,
      "title": "Apple iPhone 12 64GB Niebieski",
      "imageUrl": "http://192.168.0.102:8081/images/4d.jpg",
      
      "price": 3899,
      "attributes": [
        {
          "name": "Przekątna wyświetlacza",
          "value": "6.1 cale"
        },
        {
          "name": "Pamięć Flash",
          "value": "64 GB"
        },
        {
          "name": "System operacyjny",
          "value": "Apple iOS 14"
        },
        {
          "name": "Rozdzielczość",
          "value": "2532 x 1170 piksele"
        },
        {
          "name": "Aparat fotograficzny z tyłu",
          "value": "12 Mpix"
        },
        {
          "name": "Drugi aparat fotograficzny z tyłu",
          "value": "12 Mpix"
        },
        {
          "name": "Pamięć RAM",
          "value": "4 GB"
        },
        {
          "name": "Transmisja danych",
          "value": "4G LTE, 5G"
        },
        {
          "name": "Kolor",
          "value": "niebieski"
        }
      ]
    },
    {
      "id": 5,
      "title": "Xiaomi Redmi 9C 3/64GB szary",
      "imageUrl": "http://192.168.0.102:8081/images/5d.jpg",
      
      "price": 649,
      "attributes": [
        {
          "name": "Przekątna wyświetlacza",
          "value": "6.53 cale"
        },
        {
          "name": "Pamięć Flash",
          "value": "64 GB"
        },
        {
          "name": "System operacyjny",
          "value": "Android 10"
        },
        {
          "name": "Rozdzielczość",
          "value": "1600 x 720 piksele"
        },
        {
          "name": "Aparat fotograficzny z tyłu",
          "value": "13 Mpix"
        },
        {
          "name": "Drugi aparat fotograficzny z tyłu",
          "value": "2 Mpix"
        },
        {
          "name": "Trzeci aparat fotograficzny z tyłu",
          "value": "2 Mpix"
        },
        {
          "name": "Pamięć RAM",
          "value": "3 GB"
        },
        {
          "name": "Transmisja danych",
          "value": "4G LTE"
        }
      ]
    },
    {
      "id": 6,
      "title": "Samsung Galaxy M23 128GB Dual SIM niebieski (M236)",
      "imageUrl": "http://192.168.0.102:8081/images/6d.jpg",
      
      "price": 1299,
      "attributes": [
        {
          "name": "Przekątna wyświetlacza",
          "value": "6.6 cale"
        },
        {
          "name": "Pamięć Flash",
          "value": "128 GB"
        },
        {
          "name": "System operacyjny",
          "value": "Android 12"
        },
        {
          "name": "Rozdzielczość",
          "value": "1080 x 2408 piksele"
        },
        {
          "name": "Aparat fotograficzny z tyłu",
          "value": "50 Mpix"
        },
        {
          "name": "Drugi aparat fotograficzny z tyłu",
          "value": "8 Mpix"
        },
        {
          "name": "Trzeci aparat fotograficzny z tyłu",
          "value": "5 Mpix"
        },
        {
          "name": "Pamięć RAM",
          "value": "4 GB"
        },
        {
          "name": "Transmisja danych",
          "value": "4G LTE, 5G"
        }
      ]
    },
    {
      "id": 7,
      "title": "Samsung Galaxy S21 FE 5G 256GB Dual SIM lawendowy (G990)",
      "imageUrl": "http://192.168.0.102:8081/images/7d.jpg",
      
      "price": 3849,
      "attributes": [
        {
          "name": "Przekątna wyświetlacza",
          "value": "6.4 cale"
        },
        {
          "name": "Pamięć Flash",
          "value": "256 GB"
        },
        {
          "name": "System operacyjny",
          "value": "Android 12"
        },
        {
          "name": "Rozdzielczość",
          "value": "2340 x 1080 piksele"
        },
        {
          "name": "Aparat fotograficzny z tyłu",
          "value": "12 Mpix"
        },
        {
          "name": "Drugi aparat fotograficzny z tyłu",
          "value": "12 Mpix"
        },
        {
          "name": "Trzeci aparat fotograficzny z tyłu",
          "value": "8 Mpix"
        }
      ]
    },
    {
      "id": 8,
      "title": "Apple iPhone 13 mini 128GB Północ (Midnight)",
      "imageUrl": "http://192.168.0.102:8081/images/8d.jpg",
      
      "price": 3999,
      "attributes": [
        {
          "name": "Przekątna wyświetlacza",
          "value": "5.4 cale"
        },
        {
          "name": "Pamięć Flash",
          "value": "128 GB"
        },
        {
          "name": "System operacyjny",
          "value": "Apple iOS 15"
        },
        {
          "name": "Rozdzielczość",
          "value": "2340 x 1080 piksele"
        },
        {
          "name": "Aparat fotograficzny z tyłu",
          "value": "12 Mpix"
        },
        {
          "name": "Drugi aparat fotograficzny z tyłu",
          "value": "12 Mpix"
        },
        {
          "name": "Transmisja danych",
          "value": "4G LTE, 5G"
        },
        {
          "name": "Kolor",
          "value": "czarny"
        },
        {
          "name": "Dual SIM",
          "value": "tak"
        }
      ]
    },
    {
      "id": 9,
      "title": "Samsung Galaxy M23 128GB Dual SIM zielony (M236)",
      "imageUrl": "http://192.168.0.102:8081/images/9d.jpg",
      
      "price": 1299,
      "attributes": [
        {
          "name": "Przekątna wyświetlacza",
          "value": "6.6 cale"
        },
        {
          "name": "Pamięć Flash",
          "value": "128 GB"
        },
        {
          "name": "System operacyjny",
          "value": "Android 12"
        },
        {
          "name": "Rozdzielczość",
          "value": "1080 x 2408 piksele"
        },
        {
          "name": "Aparat fotograficzny z tyłu",
          "value": "50 Mpix"
        },
        {
          "name": "Drugi aparat fotograficzny z tyłu",
          "value": "8 Mpix"
        },
        {
          "name": "Trzeci aparat fotograficzny z tyłu",
          "value": "5 Mpix"
        },
        {
          "name": "Pamięć RAM",
          "value": "4 GB"
        },
        {
          "name": "Transmisja danych",
          "value": "4G LTE, 5G"
        }
      ]
    },
    {
      "id": 10,
      "title": "Apple iPhone 13 128GB Zielony",
      "imageUrl": "http://192.168.0.102:8081/images/10d.jpg",
      
      "price": 4499,
      "attributes": [
        {
          "name": "Przekątna wyświetlacza",
          "value": "6.1 cale"
        },
        {
          "name": "Pamięć Flash",
          "value": "128 GB"
        },
        {
          "name": "System operacyjny",
          "value": "Apple iOS 15"
        },
        {
          "name": "Rozdzielczość",
          "value": "2532 x 1170 piksele"
        },
        {
          "name": "Aparat fotograficzny z tyłu",
          "value": "12 Mpix"
        },
        {
          "name": "Drugi aparat fotograficzny z tyłu",
          "value": "12 Mpix"
        },
        {
          "name": "Transmisja danych",
          "value": "4G LTE, 5G"
        },
        {
          "name": "Kolor",
          "value": "zielony"
        },
        {
          "name": "Dual SIM",
          "value": "tak"
        }
      ]
    },
    {
      "id": 11,
      "title": "Apple iPhone 13 128GB Księżycowa Poświata (Starlight)",
      "imageUrl": "http://192.168.0.102:8081/images/11d.jpg",
      
      "price": 4499,
      "attributes": [
        {
          "name": "Przekątna wyświetlacza",
          "value": "6.1 cale"
        },
        {
          "name": "Pamięć Flash",
          "value": "128 GB"
        },
        {
          "name": "System operacyjny",
          "value": "Apple iOS 15"
        },
        {
          "name": "Rozdzielczość",
          "value": "2532 x 1170 piksele"
        },
        {
          "name": "Aparat fotograficzny z tyłu",
          "value": "12 Mpix"
        },
        {
          "name": "Drugi aparat fotograficzny z tyłu",
          "value": "12 Mpix"
        },
        {
          "name": "Transmisja danych",
          "value": "4G LTE, 5G"
        },
        {
          "name": "Kolor",
          "value": "biały"
        },
        {
          "name": "Dual SIM",
          "value": "tak"
        }
      ]
    },
    {
      "id": 12,
      "title": "POCO F3 5G 6/128 srebrny (Moonlight Silver)",
      "imageUrl": "http://192.168.0.102:8081/images/12d.jpg",
      
      "price": 1699,
      "attributes": [
        {
          "name": "Przekątna wyświetlacza",
          "value": "6.67 cale"
        },
        {
          "name": "Pamięć Flash",
          "value": "128 GB"
        },
        {
          "name": "System operacyjny",
          "value": "Android 11"
        },
        {
          "name": "Rozdzielczość",
          "value": "2400 x 1080 piksele"
        },
        {
          "name": "Aparat fotograficzny z tyłu",
          "value": "48 Mpix"
        },
        {
          "name": "Drugi aparat fotograficzny z tyłu",
          "value": "8 Mpix"
        },
        {
          "name": "Trzeci aparat fotograficzny z tyłu",
          "value": "5 Mpix"
        },
        {
          "name": "Pamięć RAM",
          "value": "6 GB"
        },
        {
          "name": "Transmisja danych",
          "value": "4G LTE, 5G"
        }
      ]
    },
    {
      "id": 13,
      "title": "Apple iPhone 12 64GB Biały",
      "imageUrl": "http://192.168.0.102:8081/images/13d.jpg",
      
      "price": 3899,
      "attributes": [
        {
          "name": "Przekątna wyświetlacza",
          "value": "6.1 cale"
        },
        {
          "name": "Pamięć Flash",
          "value": "64 GB"
        },
        {
          "name": "System operacyjny",
          "value": "Apple iOS 14"
        },
        {
          "name": "Rozdzielczość",
          "value": "2532 x 1170 piksele"
        },
        {
          "name": "Aparat fotograficzny z tyłu",
          "value": "12 Mpix"
        },
        {
          "name": "Drugi aparat fotograficzny z tyłu",
          "value": "12 Mpix"
        },
        {
          "name": "Pamięć RAM",
          "value": "4 GB"
        },
        {
          "name": "Transmisja danych",
          "value": "4G LTE, 5G"
        },
        {
          "name": "Kolor",
          "value": "biały"
        }
      ]
    },
    {
      "id": 14,
      "title": "Xiaomi Redmi 9A 2/32GB czarny (Granite Gray)",
      "imageUrl": "http://192.168.0.102:8081/images/14d.jpg",
      
      "price": 549,
      "attributes": [
        {
          "name": "Przekątna wyświetlacza",
          "value": "6.53 cale"
        },
        {
          "name": "Pamięć Flash",
          "value": "32 GB"
        },
        {
          "name": "System operacyjny",
          "value": "Android 10"
        },
        {
          "name": "Rozdzielczość",
          "value": "1600 x 720 piksele"
        },
        {
          "name": "Aparat fotograficzny z tyłu",
          "value": "13 Mpix"
        },
        {
          "name": "Pamięć RAM",
          "value": "2 GB"
        },
        {
          "name": "Transmisja danych",
          "value": "4G LTE"
        },
        {
          "name": "Pojemność akumulatora",
          "value": "5000 mAh"
        },
        {
          "name": "Kolor",
          "\nvalue": "czarny"
        }
      ]
    },
    {
      "id": 15,
      "title": "Xiaomi Redmi Note 11 4/64GB Twilight Blue",
      "imageUrl": "http://192.168.0.102:8081/images/15d.jpg",
      
      "price": 1049,
      "attributes": [
        {
          "name": "Przekątna wyświetlacza",
          "value": "6.43 cale"
        },
        {
          "name": "Pamięć Flash",
          "value": "64 GB"
        },
        {
          "name": "System operacyjny",
          "value": "Android 11"
        },
        {
          "name": "Rozdzielczość",
          "value": "2400 x 1080 piksele"
        },
        {
          "name": "Aparat fotograficzny z tyłu",
          "value": "50 Mpix"
        },
        {
          "name": "Drugi aparat fotograficzny z tyłu",
          "value": "8 Mpix"
        },
        {
          "name": "Trzeci aparat fotograficzny z tyłu",
          "value": "2 Mpix"
        },
        {
          "name": "Pamięć RAM",
          "value": "4 GB"
        },
        {
          "name": "Transmisja danych",
          "value": "4G LTE"
        }
      ]
    },
    {
      "id": 16,
      "title": "Samsung Galaxy S21 FE 5G 128GB Dual SIM lawendowy (G990)",
      "imageUrl": "http://192.168.0.102:8081/images/16d.jpg",
      
      "price": 3499,
      "attributes": [
        {
          "name": "Przekątna wyświetlacza",
          "value": "6.4 cale"
        },
        {
          "name": "Pamięć Flash",
          "value": "128 GB"
        },
        {
          "name": "System operacyjny",
          "value": "Android 12"
        },
        {
          "name": "Rozdzielczość",
          "value": "2340 x 1080 piksele"
        },
        {
          "name": "Aparat fotograficzny z tyłu",
          "value": "12 Mpix"
        },
        {
          "name": "Drugi aparat fotograficzny z tyłu",
          "value": "12 Mpix"
        },
        {
          "name": "Trzeci aparat fotograficzny z tyłu",
          "value": "8 Mpix"
        },
        {
          "name": "Pamięć RAM",
          "value": "6 GB"
        },
        {
          "name": "Transmisja danych",
          "value": "4G LTE, 5G"
        }
      ]
    },
    {
      "id": 17,
      "title": "Xiaomi Redmi Note 11 Pro 6/128GB czarny (Graphite Gray)",
      "imageUrl": "http://192.168.0.102:8081/images/17d.jpg",
      
      "price": 1699,
      "attributes": [
        {
          "name": "Pamięć Flash",
          "value": "128 GB"
        },
        {
          "name": "System operacyjny",
          "value": "Android 11"
        },
        {
          "name": "Rozdzielczość",
          "value": "2400 x 1080 piksele"
        },
        {
          "name": "Aparat fotograficzny z tyłu",
          "value": "108 Mpix"
        },
        {
          "name": "Drugi aparat fotograficzny z tyłu",
          "value": "8 Mpix"
        },
        {
          "name": "Trzeci aparat fotograficzny z tyłu",
          "value": "2 Mpix"
        },
        {
          "name": "Pamięć RAM",
          "value": "6 GB"
        },
        {
          "name": "Transmisja danych",
          "value": "4G LTE"
        },
        {
          "name": "Pojemność akumulatora",
          "value": "5000 mAh"
        }
      ]
    },
    {
      "id": 18,
      "title": "Apple iPhone 13 128GB (PRODUCT)RED",
      "imageUrl": "http://192.168.0.102:8081/images/18d.jpg",
      
      "price": 4499,
      "attributes": [
        {
          "name": "Przekątna wyświetlacza",
          "value": "6.1 cale"
        },
        {
          "name": "Pamięć Flash",
          "value": "128 GB"
        },
        {
          "name": "System operacyjny",
          "value": "Apple iOS 15"
        },
        {
          "name": "Rozdzielczość",
          "value": "2532 x 1170 piksele"
        },
        {
          "name": "Aparat fotograficzny z tyłu",
          "value": "12 Mpix"
        },
        {
          "name": "Drugi aparat fotograficzny z tyłu",
          "value": "12 Mpix"
        },
        {
          "name": "Transmisja danych",
          "value": "4G LTE, 5G"
        },
        {
          "name": "Kolor",
          "value": "czerwony"
        },
        {
          "name": "Dual SIM",
          "value": "tak"
        }
      ]
    },
    {
      "id": 19,
      "title": "Samsung Galaxy A33 5G 128GB Dual SIM biały (A336)",
      "imageUrl": "http://192.168.0.102:8081/images/19d.jpg",
      
      "price": 1399,
      "attributes": [
        {
          "name": "Przekątna wyświetlacza",
          "value": "6.4 cale"
        },
        {
          "name": "Pamięć Flash",
          "value": "128 GB"
        },
        {
          "name": "Aparat fotograficzny z tyłu",
          "value": "48 Mpix"
        },
        {
          "name": "Drugi aparat fotograficzny z tyłu",
          "value": "8 Mpix"
        },
        {
          "name": "Trzeci aparat fotograficzny z tyłu",
          "value": "5 Mpix"
        },
        {
          "name": "Pamięć RAM",
          "value": "6 GB"
        },
        {
          "name": "Transmisja danych",
          "value": "5G"
        },
        {
          "name": "Pojemność akumulatora",
          "value": "5000 mAh"
        },
        {
          "name": "Kolor",
          "value": "biały"
        }
      ]
    }
  ])
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})