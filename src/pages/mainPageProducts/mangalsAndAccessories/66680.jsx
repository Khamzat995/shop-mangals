import MainProduct from "../../../components/mainPageProduct"
import '../mainPageProducts.scss'
import { NavLink } from "react-router-dom"
import { connect } from 'react-redux'
import State from '../../../redux/state'
import Actions from '../../../redux/actions'

const Product_66680 = () => {

    const productData = {
        title: 'Большой смокер СМ40 с крышей и столами',
        code: 66680,
        panelList: [
            { title: 'ОПИСАНИЕ', content: description },
            { title: 'ХАРАКТЕРИСТИКИ', content: null },
            { title: 'ОТЗЫВЫ', content: reviews },
        ],
        navigation: [
            { title: 'Главная', path: '/', active: false },
            { title: 'Смокеры', path: '/category/smokery/', active: false },
            { title: `Большой смокер СМ40 с крышей и столами`, path: '/', active: true },
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
            <p><strong>Новинка! Большой смокер СМ40 теперь по крышей и с большими удобными столами</strong></p>
            <p>Смокер СМ40 изготовлен по американским технологиям, но с учетом особенностей кулинарии нашей страны. Все параметры изделия: объемы камер, площади входных и выходных отверстий, диаметр и высота дымохода находятся в определенной зависимости друг от друга для обеспечения оптимальной скорости дымового потока. Это позволяет поддерживать нужную температуру в камере приготовления без перерасхода топлива и увеличивает время работы на одной закладке.</p>
            <p>Изделие делится на несколько функциональных зон, справа – печь, которая является источником дыма для горячего копчения, но она также может служить, как печь под казан. Слева – камера копчения, с двойным дном и со съемной решеткой для размещения продуктов. Закрывает камеру крышка-барбекю с термометром.</p>
            <p><strong>Как коптить:</strong></p>
            <p>Для начала нужно загрузить в печь смесь березового угля и веток фруктовых (не смолистых!) деревьев, и разжечь их. Крышку печи при этом необходимо закрыть. На решетке-гриль нужно разместить продукты, закрыть крышку-барбекю и следить за показаниями термометра. Если вы установите дымоход, то температура в смокере может вырасти до 400 градусов, и тогда вы получите запеченные и слегка подкопченные продукты за довольно короткий срок. Если требуется более глубокое копчение, то верхнюю часть дымохода нужно снять. Регулировать подачу воздуха, а значит и температуру можно с помощью вентиляционного клапана печи и подвижной заслонки на основании дымохода. Выставили температуру, время от времени подкидывайте топливо и ждите готовности. То, какой вкус и аромат приобретают продукты, копченые в нашем смокере, вам не с чем будет сравнить.</p>
            <p><strong>В чем же особенность?</strong></p>
            <p>Вся соль заключается в том, что дым из печи справа налево проходит под дном камеры копчения. При этом дно нагревается, а сам дым немного остывает. Далее дым через отверстие в левом краю проникает уже в основную камеру копчения, проходит через решетку-гриль обволакивает и, нагревает продукты после чего выходит через дымоход. Таким образом, температура в левой и правой части камеры копчения получается примерно одинаковой. Это очень важно, так как в «неправильных» смокерах прямоточная система, где дым проходит от печи прямо в камеру сгорания и далее выходит в дымоход. В таком случае температура рядом с печью получается значительно выше, чем ближе к дымоходу, и вам придется перемещать продукты, чтобы часть не подгорела, или не осталась сырой.</p>
            <p><strong>А что еще можно приготовить?</strong></p>
            <p>Хорошо, что вы спросили. Если открыть крышку-барбекю, то у вас получится классический гриль. Высыпаете угли на дно жаровни и жарьте стейки и овощи на решетке-гриль. Если же убрать и саму решетку-гриль, то можно жарить шашлыки и грибы на шампурах.</p>
            <p><strong>И это всё?</strong></p>
            <p>Еще же есть печь, которая при открытой крышке превращается в полноценную печь под казан 12 л. Закрываем крышку-барбекю, устанавливаем дымоход, ставим над печью казан и готовим в нем плов, варим харчо или жарим мясо и картофель в масле.</p>

            
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

export default connect(State, Actions)(Product_66680)