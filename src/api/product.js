import {
    best_product_1
    , best_product_2
    , best_product_3
    , best_product_4
    , best_product_5
    , best_product_6
    , best_product_7
    , best_product_8
    , latest_product_1
    , latest_product_2
    , latest_product_3
    , latest_product_4
    , latest_product_5
    , latest_product_6
    , latest_product_7
    , top_product_1
    , top_product_2
    , top_product_3
    , top_product_4
    , top_product_5
    , top_product_6
    , top_product_7
    , top_product_8
    , top_product_9
    , top_product_10
    , top_product_11
    , top_product_12
    , coupon_1
    , coupon_2
    , coupon_3
    , coupon_4
    , top_product_1_b
    , top_product_1_c
    , top_product_1_d
    , top_product_2_b
    , top_product_2_c
    , top_product_2_d
    , top_product_3_b
    , top_product_3_c
    , top_product_3_d
    , top_product_4_b
    , top_product_4_c
    , top_product_4_d
    , top_product_5_b
    , top_product_5_c
    , top_product_5_d
    , top_product_6_b
    , top_product_6_c
    , top_product_6_d
    , top_product_7_b
    , top_product_7_c
    , top_product_7_d
    , top_product_8_b
    , top_product_8_c
    , top_product_8_d
    , top_product_9_b
    , top_product_9_c
    , top_product_9_d
    , top_product_10_b
    , top_product_10_c
    , top_product_10_d
    , top_product_11_b
    , top_product_11_c
    , top_product_11_d
    , top_product_12_b
    , top_product_12_c
    , top_product_12_d
    , latest_product_1_b
    , latest_product_1_c
    , latest_product_1_d
    , latest_product_2_b
    , latest_product_2_c
    , latest_product_2_d
    , latest_product_3_b
    , latest_product_3_c
    , latest_product_3_d
    , latest_product_4_b
    , latest_product_4_c
    , latest_product_4_d
    , latest_product_5_b
    , latest_product_5_c
    , latest_product_5_d
    , latest_product_6_b
    , latest_product_6_c
    , latest_product_6_d
    , latest_product_7_b
    , latest_product_7_c
    , latest_product_7_d
    , best_product_1_b
    , best_product_1_c
    , best_product_1_d
    , best_product_2_b
    , best_product_2_c
    , best_product_2_d
    , best_product_3_b
    , best_product_3_c
    , best_product_3_d
    , best_product_4_b
    , best_product_4_c
    , best_product_4_d
    , best_product_5_b
    , best_product_5_c
    , best_product_5_d
    , best_product_6_b
    , best_product_6_c
    , best_product_6_d
    , best_product_7_b
    , best_product_7_c
    , best_product_7_d
    , best_product_8_b
    , best_product_8_c
    , best_product_8_d
} from '../assets/images/index'

const top_rated = [
    {
        id: 1,
        img: top_product_1,
        img_related: [top_product_1, top_product_1_b, top_product_1_c, top_product_1_d],
        name: 'TECLAST Tablet Protective Cover Case',
        price: 899,
        discounted_price: 791,
        on_sale: true,
        discount: '-12%'
    },
    {
        id: 2,
        img_related: [top_product_2, top_product_2_b, top_product_2_c, top_product_2_d],
        img: top_product_2,
        name: 'ViewSonic Professional Monitor',
        price: 281,
        discounted_price: 299,
        on_sale: true,
        discount: '-6%'
    },
    {
        id: 3,
        img_related: [top_product_3, top_product_3_b, top_product_3_c, top_product_3_d],
        img: top_product_3,
        name: 'Bluefin Fitness Unisex Adult Tour',
        price: 996,
        on_sale: false,
    },
    {
        id: 4,
        img_related: [top_product_4, top_product_4_b, top_product_4_c, top_product_4_d],
        img: top_product_4,
        name: 'Buy Guild Planer - 900w',
        price: 239,
        on_sale: false,
    },
    {
        id: 5,
        img_related: [top_product_5, top_product_5_b, top_product_5_c, top_product_5_d],
        img: top_product_5,
        name: 'VR Virtual Reality Headset',
        price: 123,
        discounted_price: 137,
        on_sale: true,
        discount: '-10%'
    },
    {
        id: 6,
        img_related: [top_product_6, top_product_6_b, top_product_6_c, top_product_6_d],
        img: top_product_6,
        name: 'Xiaomi Poco M4 pro 5G',
        price: 67,
        on_sale: false,
    },
    {
        id: 7,
        img_related: [top_product_7, top_product_7_b, top_product_7_c, top_product_7_d],
        img: top_product_7,
        name: 'Stariver Electric Kettle',
        price: 59,
        on_sale: false,
    },
    {
        id: 8,
        img_related: [top_product_8, top_product_8_b, top_product_8_c, top_product_8_d],
        img: top_product_8,
        name: 'Tempo Sphera Spinning Reel',
        price: 679,
        discounted_price: 799,
        on_sale: true,
        discount: '-15%'
    },
    {
        id: 9,
        img_related: [top_product_9, top_product_9_b, top_product_9_c, top_product_9_d],
        img: top_product_9,
        name: 'Braun Series Electric Shaver Clean',
        price: 263,
        discounted_price: 299,
        on_sale: true,
        discount: '-12%'
    },
    {
        id: 10,
        img_related: [top_product_10, top_product_10_b, top_product_10_c, top_product_10_d],
        img: top_product_10,
        name: 'STANLEY STPP7502 750W 2mm Planer',
        price: 356,
        on_sale: false,
    },
    {
        id: 11,
        img_related: [top_product_11, top_product_11_b, top_product_11_c, top_product_11_d],
        img: top_product_11,
        name: 'Apple Watch Series 8',
        price: 188,
        on_sale: false,
    },
    {
        id: 12,
        img_related: [top_product_12, top_product_12_b, top_product_12_c, top_product_12_d],
        img: top_product_12,
        name: 'E68 Wireless Headphone Bluetooth',
        price: 114,
        on_sale: false,
    },
]

const best_selling = [
    {
        id: 1,
        img_related: [best_product_1, best_product_1_b, best_product_1_c, best_product_1_d],
        img: best_product_1,
        name: 'Apple iPhone 14 Pro Max',
        price: 167.59,
        discounted_price: 1860,
        on_sale: true,
        discount: '-10%'
    },
    {
        id: 2,
        img_related: [best_product_2, best_product_2_b, best_product_2_c, best_product_2_d],
        img: best_product_2,
        name: 'Apple iPhone 13 Pro Max',
        price: 166.00,
        on_sale: false,
    },
    {
        id: 3,
        img_related: [best_product_3, best_product_3_b, best_product_3_c, best_product_3_d],
        img: best_product_3,
        name: 'Sennheiser Sport True Wireless Earbuds',
        price: 169,
        on_sale: false,
    },
    {
        id: 4,
        img_related: [best_product_4, best_product_4_b, best_product_4_c, best_product_4_d],
        img: best_product_4,
        name: "Microsoft's Surface Hub 2S",
        price: 775,
        discounted_price: 799,
        on_sale: true,
        discount: '-3%'
    },
    {
        id: 5,
        img_related: [best_product_5, best_product_5_b, best_product_5_c, best_product_5_d],
        img: best_product_5,
        name: 'Interactive Whiteboard Microsoft Surface Hub',
        price: 688,
        on_sale: false,
    },
    {
        id: 6,
        img_related: [best_product_6, best_product_6_b, best_product_6_c, best_product_6_d],
        img: best_product_6,
        name: 'Hious Case for Lenovo Yoga Tab 13',
        price: 779,
        on_sale: false,
    },
    {
        id: 7,
        img_related: [best_product_7, best_product_7_b, best_product_7_c, best_product_7_d],
        img: best_product_7,
        name: 'Dualshock 4 Wireless Controller',
        price: 79,
        on_sale: false,
    },
    {
        id: 8,
        img_related: [best_product_8, best_product_8_b, best_product_8_c, best_product_8_d],
        img: best_product_8,
        name: 'Apple iPad mini',
        price: 887,
        on_sale: false,
    },
]

const latest_product = [
    {
        id: 1,
        img_related: [latest_product_1, latest_product_1_b, latest_product_1_c, latest_product_1_d],
        img: latest_product_1,
        name: 'Bluetooth speaker with light',
        price: 89,
        on_sale: false,
    },
    {
        id: 2,
        img_related: [latest_product_2, latest_product_2_b, latest_product_2_c, latest_product_2_d],
        img: latest_product_2,
        name: 'Polaroid Go and Camera Case Bundle',
        price: 35,
        on_sale: false,
    },
    {
        id: 3,
        img_related: [latest_product_3, latest_product_3_b, latest_product_3_c, latest_product_3_d],
        img: latest_product_3,
        name: 'Wireless Rechargeable Battery Powered Camera',
        price: 56,
        on_sale: false,
    },
    {
        id: 4,
        img_related: [latest_product_4, latest_product_4_b, latest_product_4_c, latest_product_4_d],
        img: latest_product_4,
        name: 'Cougar Gaming Case (Conquer)',
        price: 509,
        discounted_price: 599,
        on_sale: true,
        discount: '-15%'
    },
    {
        id: 5,
        img_related: [latest_product_5, latest_product_5_b, latest_product_5_c, latest_product_5_d],
        img: latest_product_5,
        name: 'Alarm Clock for Kids',
        price: 58,
        on_sale: false,
    },
    {
        id: 6,
        img_related: [latest_product_6, latest_product_6_b, latest_product_6_c, latest_product_6_d],
        img: latest_product_6,
        name: 'HP Reverb G2 VR Headset',
        price: 999,
        on_sale: false,
    },
    {
        id: 7,
        img_related: [latest_product_7, latest_product_7_b, latest_product_7_c, latest_product_7_d],
        img: latest_product_7,
        name: 'New Beats Studio Buds',
        price: 100,
        on_sale: false,
    },
]

const coupon = [
    {
        img: coupon_1,
        name: 'August Gift Voucher',
        discount: '10%',
        end_date: 'March 22, 2023 22:10:21',
        code: 'AUGUST23',
    },
    {
        img: coupon_2,
        name: 'Winter Gift Voucher',
        discount: '15%',
        end_date: 'March 25, 2023 22:10:21',
        code: 'WINTER23',
    },
    {
        img: coupon_3,
        name: 'Summer Gift Voucher',
        discount: '12%',
        end_date: 'March 21, 2023 22:10:21',
        code: 'SUMMER23',
    },
    {
        img: coupon_4,
        name: 'January Gift Voucher',
        discount: '20%',
        end_date: 'March 20, 2023 22:10:21',
        code: 'JANUARY23',
    },
]

export { top_rated, best_selling, latest_product, coupon }