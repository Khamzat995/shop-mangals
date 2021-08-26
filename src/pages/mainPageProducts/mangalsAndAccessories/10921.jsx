import MainProduct from "../../../components/mainPageProduct"
import '../mainPageProducts.scss'
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'
import State from '../../../redux/state'
import Actions from '../../../redux/actions'

const Product_10921 = () => {

    const productData = {
        code: 10921,
        panelList: [
            { title: 'ОПИСАНИЕ', content: description },
            { title: 'ХАРАКТЕРИСТИКИ', content: null },
            { title: 'ОТЗЫВЫ', content: reviews },
        ],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Мангалы и аксессуары', path: '/category/mangali/', active: false },
            { title: 'Мангал ВИКИНГ с печью для казана (2021)', path: '/', active: true },
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
            <p className="redBold"> Бесплатная доставка по Москве и Московской области!</p>
            <p><strong>Мангал ВИКИНГ</strong>это большой и практичный барбекю комплекс 2в1, сочетающий в себе классический мангал, печь для казана. Уютно впишется в ландшафт любой дачи или загородного дома</p>

            <p style={{color:'red'}}> Версия 2021 года. Что улучшили?</p>
            <ol>
                <li>Соединили боковые стойки перемычками, тем самым усилили конструкцию и устранили шаткость крыши</li>
                <li>Увеличили длину дымохода, сделали его выше крыши. (Теперь дым из трубы не скапливается под крышей)</li>
            </ol>
            <p><strong>Габаритные размеры в собранном состоянии:</strong></p>
            <ul>
                <li>Длина по фасаду: 250 см</li>
                <li>Ширина (глубина): 110 см</li>
                <li>Высота: 235 см</li>
            </ul>
            <p><strong>Жаровня мангала</strong></p>
            <p>Вы можете выбрать один из двух типов жаровни</p>
            <ol>
                <li>Классическая - с отверстиями для поддува на передней и задней стенке. Рабочие размеры жаровни 100*35 см, глубина 17 см, сверху 13 прорезей для шампуров. Можно выбрать толщину стали 3 или 5 мм (стенки и дно)</li>
                <li>С ящиками-зольниками. Здесь нет отверстий для поддува как на классической жаровне, но есть колосник (перфорированное дно) и выдвижные ящики (зольники). В них попадает мелкая зола после прогорания углей, также открывая/закрывая ящик можно регулировать приток воздуха для поддува. Рабочие размеры жаровни 100 * 35 см, глубина 15 см. Вес жаровни: 54 кг</li>

            </ol>
            <p><strong>Печь для казана</strong></p>
            <p>Печь для казана изготовлена с учетом всех замечаний наших покупателей и большого опыта приготовления различных блюд в казане.</p>
            <p>Здесь есть:</p>
            <ol>
                <li>Труба с "грибком" – труба обеспечит хорошую тягу, а грибок защитит от попадания осадков в печь.</li>
                <li>Заслонка (шибер) - находится в отводе под трубу, перекрывает тягу, когда необходимо поддержание минимального горения.</li>
                <li>Колосник – находится внутри печи, нужен для подачи кислорода, в камеру горения, а также для отвода золы.</li>
            </ol>
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

export default connect(State, Actions)(Product_10921)