import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './ProductListComp.module.scss';
import { Checkbox, Radio, Form, Slider } from 'antd';
import CheckBoxInput from '../CheckBoxInput';
import Separator from '../Separator';
import formatCurrency from '~/helpers/currencyFormatter';
import { colors } from '@mui/material';

import useCart from '~/hooks/useCart';
import ProductSlider from '../Slider';

const cx = classNames.bind(styles);

function ProductListComp() {
    const { addToCart, isItemOnCart } = useCart();

    const [value, setValue] = useState(1000000);

    const products = [
        {
            _id: '64a04eec7880d7c1ef9f07df',
            name: 'HDD Western Digital Blue 4TB',
            old_price: '2000000',
            price: '1800000',
            category: {
                _id: '649c20b00220d5730f538e1b',
                name: 'HDD',
            },
            brand: {
                _id: '649c1cc60220d5730f538e03',
                name: 'Samsung',
            },
            warranty: '3 năm',
            description:
                'Ổ cứng HDD Western Digital Blue 4TB là một giải pháp lưu trữ tốt cho nhu cầu của bạn. Với tốc độ cao, dung lượng lớn và độ bền cao, nó sẽ giúp bạn lưu trữ và truy xuất dữ liệu một cách nhanh chóng và tin cậy. Sản phẩm được thiết kế đặc biệt để đáp ứng các yêu cầu của người dùng với chất lượng đáng tin cậy và hiệu suất cao.',
            quantity: 20,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227665/product-cloud/vxnhrlqw7wnfvxlm1kjh.jpg',
                    isThumbnail: true,
                    _id: '64a04f537880d7c1ef9f08a2',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227665/product-cloud/utzodz5ci1kjbhfi2ra5.jpg',
                    isThumbnail: false,
                    _id: '64a04f537880d7c1ef9f08a3',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227666/product-cloud/o7ehw5kwuadmdzqvwkab.jpg',
                    isThumbnail: false,
                    _id: '64a04f537880d7c1ef9f08a4',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227666/product-cloud/syti0stx3kkxqvfhhhqb.jpg',
                    isThumbnail: false,
                    _id: '64a04f537880d7c1ef9f08a5',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a04f927880d7c1ef9f08a7',
            name: 'SSD Samsung 500GB',
            old_price: '1500000',
            price: '1200000',
            category: {
                _id: '649c20a90220d5730f538e19',
                name: 'SSD',
            },
            brand: {
                _id: '649c1cc60220d5730f538e03',
                name: 'Samsung',
            },
            warranty: '2 năm',
            description:
                'Ổ cứng SSD Samsung 500GB sẽ mang lại trải nghiệm tốc độ cao và hiệu suất ổn định cho hệ thống của bạn. Với dung lượng lớn, bạn có thể lưu trữ nhiều dữ liệu quan trọng và truy xuất chúng một cách nhanh chóng. Sản phẩm này được đánh giá cao về độ bền và đáng tin cậy, giúp bạn an tâm sử dụng trong thời gian dài mà không phải lo lắng về sự mất mát dữ liệu.',
            quantity: 15,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227763/product-cloud/uowtk6lhbjbyypheybaj.jpg',
                    isThumbnail: true,
                    _id: '64a04fb47880d7c1ef9f096a',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227763/product-cloud/lonumpo4xti1ew9xrdos.jpg',
                    isThumbnail: false,
                    _id: '64a04fb47880d7c1ef9f096b',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227763/product-cloud/n7ehmhlgrg4xa15efjqb.jpg',
                    isThumbnail: false,
                    _id: '64a04fb47880d7c1ef9f096c',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227763/product-cloud/gn21t5el3p0ie4unlpkx.jpg',
                    isThumbnail: false,
                    _id: '64a04fb47880d7c1ef9f096d',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a04fcf7880d7c1ef9f096f',
            name: 'CPU Intel Core i7-10700K',
            old_price: '5000000',
            price: '4500000',
            category: {
                _id: '649c20840220d5730f538e13',
                name: 'CPU',
            },
            brand: {
                _id: '649c1da20220d5730f538e07',
                name: 'Intel',
            },
            warranty: '3 năm',
            description:
                'CPU Intel Core i7-10700K là một bộ xử lý mạnh mẽ dành cho máy tính cá nhân. Với kiến trúc hiện đại và tốc độ xung nhịp cao, nó cung cấp hiệu suất vượt trội cho các ứng dụng đa nhiệm và các tác vụ yêu cầu sức mạnh xử lý. Bộ vi xử lý này còn được trang bị công nghệ tản nhiệt tiên tiến, đảm bảo nhiệt độ hoạt động ổn định và giữ cho hệ thống luôn mát mẻ trong quá trình hoạt động.',
            quantity: 10,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227839/product-cloud/fi5gmdy6bdcyd7vjgmvm.jpg',
                    isThumbnail: true,
                    _id: '64a050017880d7c1ef9f0a32',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227839/product-cloud/xc738zckidct9brqamde.jpg',
                    isThumbnail: false,
                    _id: '64a050017880d7c1ef9f0a33',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227839/product-cloud/yqdfkixxkru0nzbve27y.jpg',
                    isThumbnail: false,
                    _id: '64a050017880d7c1ef9f0a34',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227839/product-cloud/udhng0xxaeiwmb6ebk54.jpg',
                    isThumbnail: false,
                    _id: '64a050017880d7c1ef9f0a35',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a050257880d7c1ef9f0a37',
            name: 'CPU AMD Ryzen 5 5600X',
            old_price: '4500000',
            price: '4000000',
            category: {
                _id: '649c20840220d5730f538e13',
                name: 'CPU',
            },
            brand: {
                _id: '649c1e020220d5730f538e0b',
                name: 'AMD',
            },
            warranty: '3 năm',
            description:
                'CPU AMD Ryzen 5 5600X là một bộ vi xử lý mạnh mẽ dành cho các ứng dụng đa nhiệm và chơi game. Với kiến trúc Zen 3 và 6 nhân xử lý, nó cung cấp hiệu suất ấn tượng và khả năng xử lý đa luồng cao. Bộ vi xử lý này còn đi kèm với bộ tản nhiệt Wraith Stealth giúp duy trì nhiệt độ hoạt động ổn định và hiệu quả.',
            quantity: 15,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227930/product-cloud/dz2mfcxwymspqg5abm8s.jpg',
                    isThumbnail: true,
                    _id: '64a0505d7880d7c1ef9f0afa',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227932/product-cloud/wjoibu6r72zjrr7jcpqy.jpg',
                    isThumbnail: false,
                    _id: '64a0505d7880d7c1ef9f0afb',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a050757880d7c1ef9f0afd',
            name: 'CPU Intel Core i9-10900K',
            old_price: '7000000',
            price: '6500000',
            category: {
                _id: '649c20840220d5730f538e13',
                name: 'CPU',
            },
            brand: {
                _id: '649c1da20220d5730f538e07',
                name: 'Intel',
            },
            warranty: '3 năm',
            description:
                'CPU Intel Core i9-10900K là một bộ vi xử lý hàng đầu dành cho các ứng dụng đa nhiệm và làm việc chuyên nghiệp. Với 10 nhân xử lý và tốc độ xung nhịp cực cao, nó cung cấp hiệu suất vượt trội cho các tác vụ yêu cầu sức mạnh tính toán. Bộ vi xử lý này được thiết kế để đáp ứng các yêu cầu cao nhất và mang đến trải nghiệm xử lý mượt mà và nhanh chóng.',
            quantity: 8,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227990/product-cloud/dnwbf6mx54ul67jz7tp8.jpg',
                    isThumbnail: true,
                    _id: '64a050977880d7c1ef9f0bc0',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227990/product-cloud/ih2bmffhzmttxsrwdv2z.jpg',
                    isThumbnail: false,
                    _id: '64a050977880d7c1ef9f0bc1',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227990/product-cloud/nuh1mwbkkbxyjrkbajwr.jpg',
                    isThumbnail: false,
                    _id: '64a050977880d7c1ef9f0bc2',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688227990/product-cloud/zkey15l1lctfbnvdekrq.jpg',
                    isThumbnail: false,
                    _id: '64a050977880d7c1ef9f0bc3',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a050a57880d7c1ef9f0bc5',
            name: 'CPU AMD Ryzen 9 5900X',
            old_price: '8000000',
            price: '7500000',
            category: {
                _id: '649c20840220d5730f538e13',
                name: 'CPU',
            },
            brand: {
                _id: '649c1e020220d5730f538e0b',
                name: 'AMD',
            },
            warranty: '3 năm',
            description:
                'CPU AMD Ryzen 9 5900X là một bộ vi xử lý đa nhân mạnh mẽ dành cho các tác vụ đa luồng và xử lý đồ họa. Với 12 nhân xử lý và công nghệ Zen 3, nó mang đến hiệu suất tuyệt vời và khả năng đáp ứng cao cho các ứng dụng yêu cầu nhiều xử lý đồ họa và tính toán. Bộ vi xử lý này là một lựa chọn lý tưởng cho các nhà thiết kế đồ họa, dựng phim và các tác vụ sáng tạo khác.',
            quantity: 12,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228026/product-cloud/xjfflkfg7jchydcuqjt8.jpg',
                    isThumbnail: true,
                    _id: '64a050bc7880d7c1ef9f0c88',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228027/product-cloud/fmuhk1qryvsbqifjahyh.jpg',
                    isThumbnail: false,
                    _id: '64a050bc7880d7c1ef9f0c89',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a051007880d7c1ef9f0c8b',
            name: 'RAM Corsair Vengeance RGB Pro 16GB (2 x 8GB)',
            old_price: '3000000',
            price: '2700000',
            category: {
                _id: '649c208a0220d5730f538e15',
                name: 'RAM',
            },
            brand: {
                _id: '649c1dd60220d5730f538e09',
                name: 'Corsair',
            },
            warranty: '3 năm',
            description:
                'RAM Corsair Vengeance RGB Pro 16GB (2 x 8GB) là một bộ nhớ RAM cao cấp dành cho các máy tính chơi game và làm việc đa nhiệm. Với thiết kế đẹp mắt và hiệu suất ổn định, nó cung cấp khả năng xử lý nhanh chóng và đáng tin cậy cho các tác vụ yêu cầu nhiều bộ nhớ. RAM này còn được trang bị đèn LED RGB để tạo ra hiệu ứng ánh sáng phong cách trong hệ thống của bạn.',
            quantity: 10,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228156/product-cloud/yuil8c8kknqv4lkjqexi.jpg',
                    isThumbnail: true,
                    _id: '64a0513d7880d7c1ef9f0d4e',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228156/product-cloud/tyzy3m8oindxi8u9ttmh.jpg',
                    isThumbnail: false,
                    _id: '64a0513d7880d7c1ef9f0d4f',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228156/product-cloud/duh38gc33qjpy0wrttaa.jpg',
                    isThumbnail: false,
                    _id: '64a0513d7880d7c1ef9f0d50',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228156/product-cloud/fd8wmrojcybnwvhnfmdf.jpg',
                    isThumbnail: false,
                    _id: '64a0513d7880d7c1ef9f0d51',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228245/product-cloud/cxtqmqgpaubjfhebx0zh.jpg',
                    isThumbnail: true,
                    _id: '64a051967880d7c1ef9f0e1a',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228245/product-cloud/omdm7h9vmnphnfgt4yyv.jpg',
                    isThumbnail: false,
                    _id: '64a051967880d7c1ef9f0e1b',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228245/product-cloud/xsiih2f8cpfhxqrhyrch.jpg',
                    isThumbnail: false,
                    _id: '64a051967880d7c1ef9f0e1c',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228245/product-cloud/hxtavta5hs4bibwbyzru.jpg',
                    isThumbnail: false,
                    _id: '64a051967880d7c1ef9f0e1d',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228245/product-cloud/vura3oh7nqqwt2jrltxk.jpg',
                    isThumbnail: false,
                    _id: '64a051967880d7c1ef9f0e1e',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a0515c7880d7c1ef9f0d53',
            name: 'RAM Kingston HyperX Fury 32GB (2 x 16GB)',
            old_price: '5000000',
            price: '4500000',
            category: {
                _id: '649c208a0220d5730f538e15',
                name: 'RAM',
            },
            brand: {
                _id: '649d4829729c34b1c78e1b37',
                name: 'Kingston',
            },
            warranty: '3 năm',
            description:
                'RAM Kingston HyperX Fury 32GB (2 x 16GB) là một bộ nhớ RAM mạnh mẽ dành cho các máy tính yêu cầu cao về hiệu suất. Với dung lượng lớn và tốc độ xử lý nhanh, nó giúp tăng cường khả năng đa nhiệm và xử lý đồ họa. RAM này được thiết kế với công nghệ tiên tiến và đảm bảo độ ổn định và độ tin cậy trong quá trình hoạt động.',
            quantity: 5,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228156/product-cloud/yuil8c8kknqv4lkjqexi.jpg',
                    isThumbnail: true,
                    _id: '64a0513d7880d7c1ef9f0d4e',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228156/product-cloud/tyzy3m8oindxi8u9ttmh.jpg',
                    isThumbnail: false,
                    _id: '64a0513d7880d7c1ef9f0d4f',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228156/product-cloud/duh38gc33qjpy0wrttaa.jpg',
                    isThumbnail: false,
                    _id: '64a0513d7880d7c1ef9f0d50',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228156/product-cloud/fd8wmrojcybnwvhnfmdf.jpg',
                    isThumbnail: false,
                    _id: '64a0513d7880d7c1ef9f0d51',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228245/product-cloud/cxtqmqgpaubjfhebx0zh.jpg',
                    isThumbnail: true,
                    _id: '64a051967880d7c1ef9f0e1a',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228245/product-cloud/omdm7h9vmnphnfgt4yyv.jpg',
                    isThumbnail: false,
                    _id: '64a051967880d7c1ef9f0e1b',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228245/product-cloud/xsiih2f8cpfhxqrhyrch.jpg',
                    isThumbnail: false,
                    _id: '64a051967880d7c1ef9f0e1c',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228245/product-cloud/hxtavta5hs4bibwbyzru.jpg',
                    isThumbnail: false,
                    _id: '64a051967880d7c1ef9f0e1d',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228245/product-cloud/vura3oh7nqqwt2jrltxk.jpg',
                    isThumbnail: false,
                    _id: '64a051967880d7c1ef9f0e1e',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a051a57880d7c1ef9f0e20',
            name: 'RAM G.Skill Trident Z RGB 64GB (4 x 16GB)',
            old_price: '9000000',
            price: '8500000',
            category: {
                _id: '649c208a0220d5730f538e15',
                name: 'RAM',
            },
            brand: {
                _id: '64a04d037880d7c1ef9f07db',
                name: 'G-Skill',
            },
            warranty: '3 năm',
            description:
                'RAM G.Skill Trident Z RGB 64GB (4 x 16GB) là một bộ nhớ RAM cao cấp dành cho các máy tính yêu cầu cao về hiệu suất và đa nhiệm. Với dung lượng lớn và tốc độ xử lý nhanh, nó đáp ứng tốt cho việc xử lý đồ họa, chơi game và các tác vụ yêu cầu nhiều bộ nhớ. RAM này còn được trang bị đèn LED RGB để tạo ra hiệu ứng ánh sáng đẹp mắt và tùy chỉnh trong hệ thống của bạn.',
            quantity: 8,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228286/product-cloud/xmyljxoyvob5buxpxhs8.jpg',
                    isThumbnail: true,
                    _id: '64a051c07880d7c1ef9f0ee3',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228286/product-cloud/xqfivp3ybv1gf9ltbh4w.jpg',
                    isThumbnail: false,
                    _id: '64a051c07880d7c1ef9f0ee4',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228287/product-cloud/kw726np70cmmbdxjo331.jpg',
                    isThumbnail: false,
                    _id: '64a051c07880d7c1ef9f0ee5',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a051f47880d7c1ef9f0ee7',
            name: 'RAM G.Skill Trident Z RGB 64GB (4 x 16GB)',
            old_price: '9000000',
            price: '8500000',
            category: {
                _id: '649c208a0220d5730f538e15',
                name: 'RAM',
            },
            brand: {
                _id: '64a04d037880d7c1ef9f07db',
                name: 'G-Skill',
            },
            warranty: '3 năm',
            description:
                'RAM G.Skill Trident Z RGB 64GB (4 x 16GB) là một bộ nhớ RAM cao cấp dành cho các máy tính yêu cầu cao về hiệu suất và đa nhiệm. Với dung lượng lớn và tốc độ xử lý nhanh, nó đáp ứng tốt cho việc xử lý đồ họa, chơi game và các tác vụ yêu cầu nhiều bộ nhớ. RAM này còn được trang bị đèn LED RGB để tạo ra hiệu ứng ánh sáng đẹp mắt và tùy chỉnh trong hệ thống của bạn.',
            quantity: 8,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228394/product-cloud/f5tphkwncshmecepj3ql.png',
                    isThumbnail: true,
                    _id: '64a0522b7880d7c1ef9f0faa',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228394/product-cloud/ccvgk79oxjxkjnxqkial.png',
                    isThumbnail: false,
                    _id: '64a0522b7880d7c1ef9f0fab',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228394/product-cloud/xsca6y8t8r53vzcurock.png',
                    isThumbnail: false,
                    _id: '64a0522b7880d7c1ef9f0fac',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228394/product-cloud/x7lszqyr1vixyv3fozct.png',
                    isThumbnail: false,
                    _id: '64a0522b7880d7c1ef9f0fad',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228394/product-cloud/gyamb31ilv8adkhlp6be.png',
                    isThumbnail: false,
                    _id: '64a0522b7880d7c1ef9f0fae',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a052857880d7c1ef9f0fb0',
            name: 'HDD Seagate BarraCuda 2TB',
            old_price: '1500000',
            price: '1350000',
            category: {
                _id: '649c20b00220d5730f538e1b',
                name: 'HDD',
            },
            brand: {
                _id: '649c1cc60220d5730f538e03',
                name: 'Samsung',
            },
            warranty: '2 năm',
            description:
                'Ổ cứng HDD Seagate BarraCuda 2TB cung cấp dung lượng lưu trữ lớn và độ bền cao. Với tốc độ truyền dữ liệu nhanh chóng, nó giúp bạn lưu trữ và truy xuất dữ liệu một cách hiệu quả. Sản phẩm này phù hợp cho việc lưu trữ các tệp tin, ảnh, video và các ứng dụng trên máy tính cá nhân.',
            quantity: 15,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228549/product-cloud/knlzdqm1v83yo9olwhic.jpg',
                    isThumbnail: true,
                    _id: '64a052c77880d7c1ef9f1073',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228549/product-cloud/bon6xjlgd2d4mn4yr5o6.jpg',
                    isThumbnail: false,
                    _id: '64a052c77880d7c1ef9f1074',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228549/product-cloud/zblie5ht1fyc0ibabza9.jpg',
                    isThumbnail: false,
                    _id: '64a052c77880d7c1ef9f1075',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228550/product-cloud/cjb8oaztogpmalhvjlmm.jpg',
                    isThumbnail: false,
                    _id: '64a052c77880d7c1ef9f1076',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a053027880d7c1ef9f1078',
            name: 'HDD WD Black 4TB',
            old_price: '2500000',
            price: '2250000',
            category: {
                _id: '649c20b00220d5730f538e1b',
                name: 'HDD',
            },
            brand: {
                _id: '649c1cc60220d5730f538e03',
                name: 'Samsung',
            },
            warranty: '3 năm',
            description:
                'Ổ cứng HDD WD Black 4TB là một lựa chọn tốt cho việc lưu trữ dữ liệu nhanh chóng và đáng tin cậy. Với dung lượng lớn, nó giúp bạn lưu trữ nhiều tệp tin, ảnh, video và các ứng dụng một cách dễ dàng. Sản phẩm này có tốc độ truyền dữ liệu cao và khả năng hoạt động ổn định, phù hợp cho nhu cầu lưu trữ và chơi game.',
            quantity: 12,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228641/product-cloud/umxjctmavyqqfymarrge.jpg',
                    isThumbnail: true,
                    _id: '64a053227880d7c1ef9f113b',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228641/product-cloud/mlmlcllizn5e3njeofyr.jpg',
                    isThumbnail: false,
                    _id: '64a053227880d7c1ef9f113c',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228641/product-cloud/jnocgzshy8ilgvpstktz.jpg',
                    isThumbnail: false,
                    _id: '64a053227880d7c1ef9f113d',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228641/product-cloud/szuwosg43kizwpxa5ji8.jpg',
                    isThumbnail: false,
                    _id: '64a053227880d7c1ef9f113e',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a0534a7880d7c1ef9f1140',
            name: 'HDD Toshiba P300 3TB',
            old_price: '1800000',
            price: '1620000',
            category: {
                _id: '649c20b00220d5730f538e1b',
                name: 'HDD',
            },
            brand: {
                _id: '649c1cc60220d5730f538e03',
                name: 'Samsung',
            },
            warranty: '2 năm',
            description:
                'Ổ cứng HDD Toshiba P300 3TB cung cấp dung lượng lưu trữ lớn và hiệu suất ổn định. Với tốc độ truyền dữ liệu nhanh chóng, nó giúp bạn lưu trữ và truy xuất dữ liệu một cách nhanh chóng. Sản phẩm này phù hợp cho việc lưu trữ các tệp tin, ảnh, video và các ứng dụng trên máy tính cá nhân.',
            quantity: 10,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228719/product-cloud/njrrmdrax1xct0xtlght.jpg',
                    isThumbnail: true,
                    _id: '64a053707880d7c1ef9f1203',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228719/product-cloud/ogb6n5duqbhfzlkcrvfi.jpg',
                    isThumbnail: false,
                    _id: '64a053707880d7c1ef9f1204',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228719/product-cloud/tspkay876h8pemjbrxzm.jpg',
                    isThumbnail: false,
                    _id: '64a053707880d7c1ef9f1205',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a053a57880d7c1ef9f1207',
            name: 'SSD Samsung 970 EVO Plus 500GB',
            old_price: '2000000',
            price: '1800000',
            category: {
                _id: '649c20a90220d5730f538e19',
                name: 'SSD',
            },
            brand: {
                _id: '649c1cc60220d5730f538e03',
                name: 'Samsung',
            },
            warranty: '5 năm',
            description:
                'SSD Samsung 970 EVO Plus 500GB cung cấp tốc độ đọc và ghi dữ liệu nhanh chóng, cho phép bạn truy xuất và lưu trữ dữ liệu một cách hiệu quả. Với dung lượng 500GB, sản phẩm này đủ để lưu trữ hệ điều hành, ứng dụng và các tệp tin quan trọng. SSD Samsung 970 EVO Plus 500GB cũng được thiết kế để đảm bảo độ bền và đáng tin cậy trong quá trình sử dụng.',
            quantity: 20,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228841/product-cloud/byhkwj7cnhxhgu1pwunh.jpg',
                    isThumbnail: true,
                    _id: '64a053ea7880d7c1ef9f12ca',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228841/product-cloud/skmnem454mq9hubceq4p.jpg',
                    isThumbnail: false,
                    _id: '64a053ea7880d7c1ef9f12cb',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228841/product-cloud/vw2161e4v7t4wrmiaidl.jpg',
                    isThumbnail: false,
                    _id: '64a053ea7880d7c1ef9f12cc',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228841/product-cloud/cmg7n4ordeilkbphs8e3.jpg',
                    isThumbnail: false,
                    _id: '64a053ea7880d7c1ef9f12cd',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228841/product-cloud/slaibksk3o73rzwjhcbb.jpg',
                    isThumbnail: false,
                    _id: '64a053ea7880d7c1ef9f12ce',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a053f67880d7c1ef9f12d0',
            name: 'SSD Kingston A2000 1TB',
            old_price: '3000000',
            price: '2700000',
            category: {
                _id: '649c20a90220d5730f538e19',
                name: 'SSD',
            },
            brand: {
                _id: '649d4829729c34b1c78e1b37',
                name: 'Kingston',
            },
            warranty: '3 năm',
            description:
                'SSD Kingston A2000 1TB mang đến tốc độ đọc và ghi dữ liệu nhanh chóng, giúp bạn tăng hiệu suất làm việc và trải nghiệm sử dụng. Với dung lượng lưu trữ 1TB, sản phẩm này đủ lớn để lưu trữ các tệp tin, ảnh, video và các ứng dụng quan trọng của bạn. SSD Kingston A2000 1TB cũng được thiết kế với khả năng bảo mật và độ bền cao.',
            quantity: 15,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228886/product-cloud/avli1hfwhnvgiwmycwdg.jpg',
                    isThumbnail: true,
                    _id: '64a054177880d7c1ef9f1393',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228886/product-cloud/nnliqqoj78p2xz50iynn.jpg',
                    isThumbnail: false,
                    _id: '64a054177880d7c1ef9f1394',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228886/product-cloud/p6xblcr0y0bqhyrqmoxc.jpg',
                    isThumbnail: false,
                    _id: '64a054177880d7c1ef9f1395',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688228886/product-cloud/l228moxdqyc1y3ooeckl.jpg',
                    isThumbnail: false,
                    _id: '64a054177880d7c1ef9f1396',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a054237880d7c1ef9f1398',
            name: 'SSD Corsair MP600 2TB',
            old_price: '5000000',
            price: '4500000',
            category: {
                _id: '649c20a90220d5730f538e19',
                name: 'SSD',
            },
            brand: {
                _id: '649c1dd60220d5730f538e09',
                name: 'Corsair',
            },
            warranty: '3 năm',
            description:
                'SSD Corsair MP600 2TB là một sản phẩm mạnh mẽ với tốc độ đọc và ghi dữ liệu cực nhanh, giúp bạn tăng cường hiệu suất làm việc và trải nghiệm chơi game. Với dung lượng lưu trữ lên đến 2TB, sản phẩm này đủ rộng để lưu trữ cả hệ điều hành, ứng dụng, và các tệp tin lớn. SSD Corsair MP600 2TB cũng được thiết kế với độ bền và khả năng làm mát tốt, đảm bảo sự ổn định trong quá trình sử dụng.',
            quantity: 12,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229008/product-cloud/fcv8ng6c4xfycvpkqwob.jpg',
                    isThumbnail: true,
                    _id: '64a054927880d7c1ef9f145b',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229008/product-cloud/rqu2ytbgxhic0mcvukfm.jpg',
                    isThumbnail: false,
                    _id: '64a054927880d7c1ef9f145c',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229009/product-cloud/clleg7huwsnzzmicwxpy.jpg',
                    isThumbnail: false,
                    _id: '64a054927880d7c1ef9f145d',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229009/product-cloud/sbewy86f84i326klp0aa.jpg',
                    isThumbnail: false,
                    _id: '64a054927880d7c1ef9f145e',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a054a87880d7c1ef9f1460',
            name: 'SSD Intel 660p 1TB',
            old_price: '2800000',
            price: '2520000',
            category: {
                _id: '649c20a90220d5730f538e19',
                name: 'SSD',
            },
            brand: {
                _id: '649c1da20220d5730f538e07',
                name: 'Intel',
            },
            warranty: '3 năm',
            description:
                'SSD Intel 660p 1TB cung cấp hiệu suất đọc và ghi dữ liệu nhanh chóng, giúp tăng tốc quá trình truy xuất và lưu trữ dữ liệu. Với dung lượng 1TB, sản phẩm này đủ lớn để lưu trữ hệ điều hành, ứng dụng và các tệp tin quan trọng. SSD Intel 660p 1TB cũng được thiết kế để tiết kiệm năng lượng và cải thiện tuổi thọ của ổ đĩa.',
            quantity: 18,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229078/product-cloud/hvx58ha84v6ryhajthyd.jpg',
                    isThumbnail: true,
                    _id: '64a054d87880d7c1ef9f1523',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229079/product-cloud/iujdhbj5z5fha5xa526u.jpg',
                    isThumbnail: false,
                    _id: '64a054d87880d7c1ef9f1524',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229079/product-cloud/lepbkzs3haw7cfxqhewy.jpg',
                    isThumbnail: false,
                    _id: '64a054d87880d7c1ef9f1525',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229079/product-cloud/ihepicit8qrmzcyt2fz6.jpg',
                    isThumbnail: false,
                    _id: '64a054d87880d7c1ef9f1526',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a0550b7880d7c1ef9f1529',
            name: 'VGA NVIDIA GeForce RTX 3080',
            old_price: '15000000',
            price: '14000000',
            category: {
                _id: '649c20930220d5730f538e17',
                name: 'VGA',
            },
            brand: {
                _id: '649c1cc60220d5730f538e03',
                name: 'Samsung',
            },
            warranty: '2 năm',
            description:
                'VGA NVIDIA GeForce RTX 3080 là một card đồ họa mạnh mẽ với hiệu suất vượt trội. Với công nghệ tiên tiến và khả năng xử lý đồ họa tuyệt vời, sản phẩm này đáp ứng tốt các nhu cầu chơi game, thiết kế đồ họa và làm việc với các ứng dụng đòi hỏi đồ họa cao. VGA NVIDIA GeForce RTX 3080 cung cấp hình ảnh sắc nét và mượt mà, mang đến trải nghiệm tuyệt vời cho người dùng.',
            quantity: 10,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229187/product-cloud/xhy3qv8fovglxtikqgqy.png',
                    isThumbnail: true,
                    _id: '64a055457880d7c1ef9f15ec',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229187/product-cloud/vsbgrzomvn8y35wujzuk.png',
                    isThumbnail: false,
                    _id: '64a055457880d7c1ef9f15ed',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229187/product-cloud/sao4uhyau6w8jxrczoor.png',
                    isThumbnail: false,
                    _id: '64a055457880d7c1ef9f15ee',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229187/product-cloud/xndnvocny7v5p5zfgsfv.png',
                    isThumbnail: false,
                    _id: '64a055457880d7c1ef9f15ef',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229188/product-cloud/ngpxd3iv5k5y9qjgvcwp.png',
                    isThumbnail: false,
                    _id: '64a055457880d7c1ef9f15f0',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a0559c7880d7c1ef9f15f2',
            name: 'VGA ASUS TUF Gaming GeForce GTX 1660 Super',
            old_price: '6000000',
            price: '5500000',
            category: {
                _id: '649c20930220d5730f538e17',
                name: 'VGA',
            },
            brand: {
                _id: '64a04cd37880d7c1ef9f07d9',
                name: 'Asus',
            },
            warranty: '2 năm',
            description:
                'VGA ASUS TUF Gaming GeForce GTX 1660 Super là một card đồ họa phổ thông với hiệu suất ổn định và giá trị vượt trội. Sản phẩm này đáp ứng tốt các nhu cầu chơi game và làm việc với đồ họa cơ bản. VGA ASUS TUF Gaming GeForce GTX 1660 Super được thiết kế với chất lượng bền bỉ và khả năng làm mát hiệu quả.',
            quantity: 15,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229313/product-cloud/gyqxcbk1vfvtz0u3lut0.png',
                    isThumbnail: true,
                    _id: '64a055c57880d7c1ef9f16b5',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229316/product-cloud/lurh0yhwxkczy5c4ylio.png',
                    isThumbnail: false,
                    _id: '64a055c57880d7c1ef9f16b6',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229316/product-cloud/ltauc8uqpzhlzl6ibggq.png',
                    isThumbnail: false,
                    _id: '64a055c57880d7c1ef9f16b7',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a055e17880d7c1ef9f16b9',
            name: 'VGA AMD Radeon RX 6800 XT',
            old_price: '12000000',
            price: '11000000',
            category: {
                _id: '649c20930220d5730f538e17',
                name: 'VGA',
            },
            brand: {
                _id: '649c1e020220d5730f538e0b',
                name: 'AMD',
            },
            warranty: '2 năm',
            description:
                'VGA AMD Radeon RX 6800 XT là một card đồ họa chất lượng cao với hiệu suất mạnh mẽ. Với kiến trúc tiên tiến và công nghệ đồ họa hàng đầu, sản phẩm này mang đến trải nghiệm chơi game và làm việc với đồ họa tuyệt vời. VGA AMD Radeon RX 6800 XT hỗ trợ hiển thị đa màn hình, khả năng xử lý đồ họa mượt mà và hình ảnh sắc nét.',
            quantity: 8,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229392/product-cloud/ts6cu98zupdgt7vwdbpn.png',
                    isThumbnail: true,
                    _id: '64a056117880d7c1ef9f177c',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229392/product-cloud/ypqgjzx7jvs3dj81ukn7.png',
                    isThumbnail: false,
                    _id: '64a056117880d7c1ef9f177d',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229392/product-cloud/wr9yzrdspiq3fnraevsb.png',
                    isThumbnail: false,
                    _id: '64a056117880d7c1ef9f177e',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229392/product-cloud/dlyrelwzznvsshjp7h34.png',
                    isThumbnail: false,
                    _id: '64a056117880d7c1ef9f177f',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a056517880d7c1ef9f1781',
            name: 'Power EVGA SuperNOVA 750 G5',
            old_price: '2000000',
            price: '1800000',
            category: {
                _id: '649e64a4bb825c526de5e36d',
                name: 'Power',
            },
            brand: {
                _id: '649c1dd60220d5730f538e09',
                name: 'Corsair',
            },
            warranty: '3 năm',
            description:
                'Power EVGA SuperNOVA 750 G5 là một nguồn điện chất lượng cao được thiết kế để cung cấp năng lượng ổn định và hiệu suất tối ưu cho hệ thống máy tính của bạn. Với công suất 750W, nguồn này đáp ứng được các yêu cầu của cả máy tính thông thường và máy tính chơi game. Nguồn EVGA SuperNOVA 750 G5 cung cấp hiệu suất cao, độ ổn định cao và bảo vệ an toàn cho hệ thống của bạn.',
            quantity: 15,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229505/product-cloud/yvaiehxxzcgd7grdce3z.jpg',
                    isThumbnail: true,
                    _id: '64a056837880d7c1ef9f1844',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229505/product-cloud/etay1flnxnize3ilnkcw.jpg',
                    isThumbnail: false,
                    _id: '64a056837880d7c1ef9f1845',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229506/product-cloud/pqzxjwtunnoclrlfobn4.png',
                    isThumbnail: false,
                    _id: '64a056837880d7c1ef9f1846',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229506/product-cloud/sds4briw7mnoqsphpmpd.jpg',
                    isThumbnail: false,
                    _id: '64a056837880d7c1ef9f1847',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229506/product-cloud/zmbvxn88eas3gu49cqxy.jpg',
                    isThumbnail: false,
                    _id: '64a056837880d7c1ef9f1848',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a056927880d7c1ef9f184a',
            name: 'Power Corsair RM850x',
            old_price: '2500000',
            price: '2300000',
            category: {
                _id: '649e64a4bb825c526de5e36d',
                name: 'Power',
            },
            brand: {
                _id: '649c1dd60220d5730f538e09',
                name: 'Corsair',
            },
            warranty: '5 năm',
            description:
                'Power Corsair RM850x là một nguồn điện chất lượng cao và đáng tin cậy. Với công suất 850W, nguồn này cung cấp đủ năng lượng cho cả các hệ thống máy tính thông thường và máy tính chơi game cao cấp. Nguồn Corsair RM850x được thiết kế để đạt hiệu suất tối đa và độ ổn định cao, đồng thời giảm tiếng ồn và tiết kiệm năng lượng. Đây là một lựa chọn tuyệt vời cho việc nâng cấp hệ thống của bạn.',
            quantity: 10,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229586/product-cloud/tnz7kpijo4illkmh9dc5.jpg',
                    isThumbnail: true,
                    _id: '64a056d47880d7c1ef9f19cd',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229586/product-cloud/iaf2nflypjdeuvxa8kna.jpg',
                    isThumbnail: false,
                    _id: '64a056d47880d7c1ef9f19ce',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229586/product-cloud/qblkchahry0njrd0d07c.jpg',
                    isThumbnail: false,
                    _id: '64a056d47880d7c1ef9f19cf',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229586/product-cloud/fqzkqkojlxln8xvfvusm.jpg',
                    isThumbnail: false,
                    _id: '64a056d47880d7c1ef9f19d0',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229587/product-cloud/sljikopjxos7plgkppds.png',
                    isThumbnail: false,
                    _id: '64a056d47880d7c1ef9f19d1',
                },
            ],
            __v: 0,
        },
        {
            _id: '64a056f07880d7c1ef9f19d3',
            name: 'Power Seasonic Focus GX-650',
            old_price: '1800000',
            price: '1600000',
            category: {
                _id: '649e64a4bb825c526de5e36d',
                name: 'Power',
            },
            brand: {
                _id: '649c1dd60220d5730f538e09',
                name: 'Corsair',
            },
            warranty: '3 năm',
            description:
                'Power Seasonic Focus GX-650 là một nguồn điện có hiệu suất cao và đáng tin cậy. Với công suất 650W, nguồn này cung cấp đủ năng lượng cho hệ thống máy tính thông thường và cả máy tính chơi game. Nguồn Seasonic Focus GX-650 được thiết kế để cung cấp điện ổn định và hiệu suất tối ưu cho các linh kiện trong hệ thống của bạn. Đây là một sự lựa chọn tốt với giá cả hợp lý.',
            quantity: 20,
            status_product: 'Còn hàng',
            images: [
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229659/product-cloud/uulk3gqkk59mw7n0hbm3.jpg',
                    isThumbnail: true,
                    _id: '64a0571c7880d7c1ef9f1a96',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229659/product-cloud/m58w4bgfidgoeh9xgknq.jpg',
                    isThumbnail: false,
                    _id: '64a0571c7880d7c1ef9f1a97',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229659/product-cloud/lir5xqhfexf0viyllmnm.jpg',
                    isThumbnail: false,
                    _id: '64a0571c7880d7c1ef9f1a98',
                },
                {
                    url: 'https://res.cloudinary.com/dew9jv3hy/image/upload/v1688229659/product-cloud/cuvqqfoqdd0nbv6hotgs.jpg',
                    isThumbnail: false,
                    _id: '64a0571c7880d7c1ef9f1a99',
                },
            ],
            __v: 0,
        },
    ];

    return (
        <div className={cx('row', 'productlist-container')}>
            <div className={cx('col-3', 'action-wrapper')}>
                <div className={cx('filter-by-brand')}>
                    <h3 className={cx('title-brand')}>Brand</h3>
                    <Separator className={cx('filter-separator')} />
                    <div className={cx('name-brands')}>
                        <CheckBoxInput text="Intel" />
                        <CheckBoxInput text="Kingston" />
                        <CheckBoxInput text="Corsair" />
                        <CheckBoxInput text="AMD" />
                    </div>
                </div>

                <div className={cx('filter-by-price')}>
                    <div className={cx('inner-filter')}>
                        <h3 className={cx('title-brand')}>Price</h3>
                        <Separator className={cx('filter-separator')} />
                        <Slider
                            range
                            step={1}
                            min={0}
                            defaultValue={[500000, 10000000]}
                            max={100000000}
                            tipFormatter={formatCurrency}
                            className={cx('slider-price')}
                            trackStyle={[{ backgroundColor: '#DB4444' }, { backgroundColor: '#DB4444' }]}
                            handleStyle={{ borderColor: '#DB4444' }}
                            dotStyle={{ borderColor: '#DB4444', backgroundColor: '#DB4444' }}
                        />
                    </div>
                </div>
            </div>
            <div className={cx('col-9', 'action-wrapper')}>
                <ProductSlider arrowVisible={false} rowNumber={3} products={products} addToCart={addToCart} />
            </div>
        </div>
    );
}

export default ProductListComp;
