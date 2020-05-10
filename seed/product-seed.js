var Product = require("../models/product");
var mongoose = require("mongoose");

// Mongodb Config
// mongoose.set("useCreateIndex", true);
mongoose.connect("mongodb://localhost:27017/online-shopping", { useNewUrlParser: true, useUnifiedTopology: true });

var products = [
    new Product({
        imagePath: "assets/products/mi-l32m5-al-original-imafrjtbngu9hrwz.jpeg",
        title: "Mi 4A PRO 80 cm (32) HD Ready LED Smart Android TV",
        specification: "<li>Netflix|Prime Video|Hotstar|Youtube</li><li>Operating System: Android</li><li>HD Ready 1366 x 768 Pixels</li><li>20 W Speaker Output</li><li>60 Hz Refresh Rate</li><li>3 x HDMI | 2 x USB</li><li>1 Year Warranty on Product and Additional 1 Year Warranty on Panel</li>",
        price: 12499
    }),
    new Product({
        imagePath: "assets/products/mi-l43m4-4ain-original-imafrjtbrhzavehr.jpeg",
        title: "Mi 4A Pro 108 cm (43) Full HD LED Smart Android TV",
        specification: "<li>Netflix|Prime Video|Hotstar|Youtube</li><li>Operating System: Android</li><li>Full HD 1920 x 1080 Pixels</li><li>20 W Speaker Output</li><li>60 Hz Refresh Rate</li><li>3 x HDMI | 3 x USB</li><li>1 Year Warranty on Product and 1 Year Additional Warranty for Panel</li>",
        price: 21999
    }),
    new Product({
        imagePath: "assets/products/lg-32lm560bptc-original-imafjydmy5rwcdw7.jpeg",
        title: "LG All-in-One 80cm (32 inch) HD Ready LED Smart TV",
        specification: "<li>Netflix|Prime Video|Hotstar|Youtube</li><li>Operating System: WebOS</li><li>HD Ready 1366 x 768 Pixels</li><li>10 W Speaker Output</li><li>60 Hz Refresh Rate</li><li>2 x HDMI | 1 x USB</li><li>IPS</li><li>1 Year LG India Comprehensive Warranty and additional 1 year Warranty is applicable on panel/module</li>",
        price: 14999
    }),
    new Product({
        imagePath: "assets/products/mi-l40m5-5ain-original-imafrjtbrjazqtgr.jpeg",
        title: "Mi 4A 100 cm (40) Full HD LED Smart Android TV",
        specification: "<li>Netflix|Prime Video|Hotstar|Youtube</li><li>Operating System: Android</li><li>Full HD 1920 x 1080 Pixels</li><li>20 W Speaker Output</li><li>60 Hz Refresh Rate</li><li>3 x HDMI | 2 x USB</li><li>1 Year on TV, 2 years on Panel, 6 Months on Accessories</li>",
        price: 17999
    }),
    new Product({
        imagePath: "assets/products/vu-32us-32us-original-imafq2fmb4cthrbp.jpeg",
        title: "Vu Premium 80cm (32 inch) HD Ready LED Smart Android TV",
        specification: "<li>Netflix|Prime Video|Hotstar|Youtube</li><li>Operating System: Android</li><li>HD Ready 1366 x 768 Pixels</li><li>20 W Speaker Output</li><li>60 Hz Refresh Rate</li><li>2 x HDMI | 2 x USB</li><li>A+ Grade High Bright HD Panel</li><li>1 Year Vu Domestic Warranty</li>",
        price: 11999
    }),
    new Product({
        imagePath: "assets/products/mi-l43m5-an-original-imafrjtbdbnczaxk.jpeg",
        title: "Mi 4X 108 cm (43) Ultra HD (4K) LED Smart Android TV",
        specification: "<li>Netflix|Prime Video|Hotstar|Youtube</li><li>Operating System: Android</li><li>Ultra HD (4K) 3840 x 2160 Pixels</li><li>20 W Speaker Output</li><li>60 Hz Refresh Rate</li><li>3 x HDMI | 2 x USB</li><li>1 Year on TV, 2 years on Panel, 6 Months on Accessories</li>",
        price: 24999
    }),
    new Product({
        imagePath: "assets/products/vu-50-qdv-50-qdv-original-imafh4gf6emskgut.jpeg",
        title: "Vu Pixelight 126cm (50 inch) Ultra HD (4K) LED Smart TV  with cricket mode",
        specification: "<li>Netflix|Prime Video|Youtube</li><li>Operating System: Linux</li><li>Ultra HD (4K) 3840 x 2160 Pixels</li><li>24 W Speaker Output</li><li>60 Hz Refresh Rate</li><li>3 x HDMI | 2 x USB</li><li>High Bright A+ Grade UHD Panel</li><li>1 Year Vu Domestic Warranty</li>",
        price: 26999
    }),
    new Product({
        imagePath: "assets/products/thomson-b9-pro-32m3277-pro-original-imafkg2vzknsmhhk.jpeg",
        title: "Thomson B9 Pro 80cm (32 inch) HD Ready LED Smart TV",
        specification: "<li>Netflix|Prime Video|Hotstar|Youtube</li><li>Operating System: Android Based</li><li>HD Ready 1366 x 768 Pixels</li><li>20 W Speaker Output</li><li>60 Hz Refresh Rate</li><li>3 x HDMI | 2 x USB</li><li>A+ Samsung Panel</li><li>My wall interface with 10000000+ hrs of content</li><li>1 Year Warranty</li>",
        price: 9999
    }),
    new Product({
        imagePath: "assets/products/motorola-32safhdm-original-imafm59fzeshmauz.jpeg",
        title: "Motorola 80.5cm (32 inch) HD Ready LED Smart Android TV  with Wireless Gamepad",
        specification: "<li>Netflix|Prime Video|Hotstar|Youtube</li><li>Operating System: Android</li><li>HD Ready 1366 x 768 Pixels</li><li>20 W Speaker Output</li><li>60 Hz Refresh Rate</li><li>2 x HDMI | 2 x USB</li><li>IPS</li><li>1 Year Warranty on Product</li>",
        price: 13999
    }),
    new Product({
        imagePath: "assets/products/lg-43lm5600ptc-original-imafjydmeh8u3pg7.jpeg",
        title: "LG All-in-One 108cm (43 inch) Full HD LED Smart TV",
        specification: "<li>Netflix|Prime Video|Hotstar|Youtube</li><li>Operating System: WebOS</li><li>Full HD 1920 x 1080 Pixels</li><li>20 W Speaker Output</li><li>50 Hz Refresh Rate</li><li>2 x HDMI | 1 x USB</li><li>IPS Panel</li><li>1 Year LG India Comprehensive Warranty and additional 1 year Warranty is applicable on panel/module</li>",
        price: 28999
    }),
    new Product({
        imagePath: "assets/products/thomson-b9-pro-40m4099-40m4099-pro-original-imafkjazmmrurw7t.jpeg",
        title: "Thomson B9 Pro 102cm (40 inch) Full HD LED Smart TV",
        specification: "<li>Netflix|Prime Video|Hotstar|Youtube</li><li>Operating System: Android Based</li><li>Full HD 1920 x 1080 Pixels</li><li>20 W Speaker Output</li><li>60 Hz Refresh Rate</li><li>3 x HDMI | 2 x USB</li><li>A+ Samsung Panel</li><li>My wall interface with 10000000+ hrs of content</li><li>1 Year Warranty</li>",
        price: 15999
    }),
    new Product({
        imagePath: "assets/products/thomson-32tm3290-original-imafkjazamdewz2x.jpeg",
        title: "Thomson R9 80cm (32 inch) HD Ready LED TV",
        specification: "<li>HD Ready 1366 x 768 Pixels</li><li>20 W Speaker Output</li><li>60 Hz Refresh Rate</li><li>2 x HDMI | 2 x USB</li><li>Thin Bezel Design</li><li>1 Year Warranty</li>",
        price: 7999
    })
];

var done = 0;
for (var i = 0 ; i < products.length ; i++) {
    products[i].save(function(err, result) {
        if (err) console.log(err);
        else {
            // console.log(done);
            done++;
            if(done === products.length) exit();    
        }
    });
}

function exit(){
    mongoose.disconnect();
}