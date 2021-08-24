import MainProduct from "../../../components/mainPageProduct"
import '../mainPageProducts.scss'
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'
import State from '../../../redux/state'
import Actions from '../../../redux/actions'

const Product_66614 = () => {

    const productData = {
        code: 66614,
        panelList: [
            { title: 'ОПИСАНИЕ', content: description },
            { title: 'ХАРАКТЕРИСТИКИ', content: null },
            { title: 'ОТЗЫВЫ', content: reviews },
        ],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Мангалы и аксессуары', path: '/category/mangali/', active: false },
            { title: 'Мангалы с крышей', path: '/category/mangali/s-krishey/', active: false },
            { title: 'Гриль-Мангал ВИТЯЗЬ "Шеф Повар" с казаном (2021)', path: '/', active: true },
        ]
    }

    return (
        <div className='main-page-product'>
            <MainProduct productData={productData} />
        </div >
    )
}

const description = () => {
    return (
        <div className='productPanelInfo'>
            <p><strong>Разборный мангал МУРОМЕЦ с печкой для казана, крышкой гриль и решеткой -</strong>это практичный барбекю комплекс 3в1, сочетающий в себе классический мангал, угольный гриль и печь для казана. Уютно впишется в ландшафт любой дачи или загородного дома</p>
            <p style={{color: 'rgb(255, 0, 0)'}}>Версия 2021 года. Что улучшили?</p>
            <ol>
                <li>Соединили боковые стойки перемычками, тем самым устранили шаткость конструкции</li>
                <li>Увеличили длину дымохода, сделали его выше крыши. (Теперь дым из трубы не скапливается под крышей)</li>
            </ol>
            <p><strong>Габаритные размеры в собранном состоянии:</strong></p>
            <ul>
                <li>Длина по фасаду: 148 см</li>
                <li>Ширина (глубина): 110 см</li>
                <li>Высота: 235 см</li>
            </ul>
        </div>
    )
}

const reviews = () => {
    return (
        <div className='productPanelInfo__comments'>
            <div>Оставьте ваш отзыв первым</div>
            <p>Чтобы добавить отзыв, пожалуйста, <NavLink to='/signup'>зарегистрируйтесь</NavLink> или <NavLink to='/login'>войдите</NavLink></p>
        </div>
    )
}

export default connect(State, Actions)(Product_66614)