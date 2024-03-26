import './App.scss';
import { Block } from './components/Block';
import { BlockSmall } from './components/BlockSmall';
import { Position } from './components/Position';

function App() {
  return (
    <div className="pages_wrapper">
      <img className='logo' src="/1.PNG" alt="" />
      <section className="page">
        <div className="default_header">
          <h2>НА КРАНЕ *</h2>
          <div className="small"></div>
        </div>
        <div className="extra-text">
          * А так же у нас есть холодильник, <br /> для тех кто хочет чего-то
          еще!
        </div>
        <div className="block_wrapper">
          <Block header="ЛАГЕР">
            <Position
              name={'Port Pilsner'}
              cost={`300`}
              description={`Легкая горечь, чистый вкус и ароматRUS, 4.9%, 400 мл`}
            />
            <Position
              name={'Hacker-Pschorr Kellerbier'}
              cost={`390`}
              description={`Нежный и плотный Баварский лагер с медовоцветочными нотами во вкусе
              GER, 5.5%, 400 мл`}
            />
            <Position
              name={'Kurpfalz Brau Helles'}
              cost={`390`}
              description={`Освежающий лагер родом из Гамбурга
              GER, 5.3%, 400 мл`}
            />
            <Position
              name={'Dreamteam Sint Pieters Blond'}
              cost={`400`}
              description={`Праздничный бельгийский светлый эль от мастодонтов
              бельгийской культуры в Санкт-Петербурге
              RUS, 6.5%, 400 мл`}
            />
          </Block>
          <Block header="ТЕМНОЕ">
            <Position
              name={`Bakunin Moloko+`}
              cost={`350`}
              description={`Прекрасный молочный стаут RUS, 6.5%, 400 мл`}
            />
            <Position
              name={`Petrus Bordeaux`}
              cost={`430`}
              description={`Для ценителей выдержки в винных бочках BEL, 5.5%, 330 мл`}
            />
            <Position
              name={`Schneider Weisse TAP 6 Aventinus`}
              cost={`430`}
              description={`Один из старейших Баварских темно-рубиновых
              доппельбоков
              GER, 8.2%, 400 мл`}
            />
          </Block>
          <Block header="ПШЕНИЧНОЕ">
            <Position
              name={`Andechser Weissbier`}
              cost={`370`}
              description={`За него мы любим немецкое пиво!
GER, 5.5%, 400 мл`}
            />
            <Position
              name={`Blue Moon`}
              cost={`440`}
              description={`Витбир с кореандром и апельсиновой цедрой
USA, 5.4%, 400 мл`}
            />
          </Block>
          <Block header="АМБЕР">
            <Position
              name={`Old Speckled Hen`}
              cost={`370`}
              description={`Один из самых лучших Британский биттеров! GBR, 5%, 400 мл`}
            />
            <Position
              name={`Palm Amber`}
              cost={`380`}
              description={`Сладковатый янтарный эль из Бельгии BEL, 5.2%, 400 мл`}
            />
          </Block>
          <Block header="ГОРЬКОЕ">
            <Position
              name={`AF Brew Mosaic`}
              cost={`360`}
              description={`Дважды охмеленный, умеренно горький эль с ароматом тропических фруктов, цитрусов и черной смородины RUS, 6.7%, 400мл`}
            />
            <Position
              name={`Ostrovica IPA`}
              cost={`370`}
              description={`Уверенно горький, сухой и питкий АйПиЭй RUS, 6.2%, 400мл`}
            />
            <Position
              name={`Zagovor Stop’n’Go Lupulin Powder`}
              cost={`480`}
              description={`Сочный, плотный и в меру сухой, дважды охмеленный АйПиЭй RUS, 7%, 400мл`}
            />
          </Block>
          <Block header="ФРУКТОВОЕ">
            <Position
              name={`Cherry Ruby`}
              cost={`350`}
              description={`Кислая вишневая косточка и ликерная сладость RUS 7%, 330 мл`}
            />
            <Position
              name={`Hora Del Vermut`}
              cost={`360`}
              description={`Пивной твист на красный Испанский вермут. RUS 6%, 330 мл`}
            />
          </Block>
          <Block header="САУР">
            <Position
              name={`Bakunin Salty Dog`}
              cost={`350`}
              description={`Классический гозе с берегов Невы RUS, 5.0%, 400 мл`}
            />
          </Block>
          <Block header="СИДР">
            <Position
              name={`Da-Da №3`}
              cost={`300`}
              description={`Тот самый полусладкий сидр с дальней дачи RUS, 4%, 400 мл`}
            />
            <Position
              name={`Araeta Amalur`}
              cost={`390`}
              description={`Максимально сухой испанский сидр ESP, 6%, 330 мл`}
            />
            <Position
              name={`Горячий сидр`}
              cost={`400`}
              description={`Согревающий пряный горячий сидр с добавлением маленького секрета Local, 9%, 200 мл`}
            />
          </Block>
          <Block header="НОН АЛКО">
            <Position
              name={`Scoby Проект ПС`}
              cost={`200`}
              description={`Лучшая комбуча на острове! Б/A, 330 мл`}
            />
          </Block>
        </div>
      </section>
      <section className="page">
        <div className="default_header">
          <h2>ВИНО</h2>
          <div className="small"></div>
        </div>
        <div className="block_wrapper">
          <Block header="БЕЛОЕ">
            <Position
              name={`Schneider Gruner Veltliner`}
              cost={`390`}
              description={`AUT, 125 мл`}
            />
            <Position
              name={`Ferrandiere Chardonnay IGP Languedoc`}
              cost={`490`}
              description={`FRA, 125 мл`}
            />
            <Position
              name={`Blanche de Monicord Bordeaux`}
              cost={`580`}
              description={`AOC, 125 мл`}
            />
          </Block>
          <Block header="КРАСНОЕ">
            <Position
              name={`Schneider Zweigelt`}
              cost={`390`}
              description={`AUT, 125 мл`}
            />
            <Position
              name={`Domaine Coste Rousse Taix Merlot`}
              cost={`430`}
              description={`FRA, 125 мл`}
            />
            <Position
              name={`Vale da Capucha Clima`}
              cost={`580`}
              description={`PRT, 125 мл`}
            />
          </Block>
          <Block header="ИГРИСТОЕ">
            <Position
              name={`Cava Castelfino`}
              cost={`390 / 2340`}
              description={`SPA, 125 / 750 мл`}
            />
          </Block>
          <Block header="РОЗОВОЕ">
            <Position
              name={`Domaine Coste Rousse Taix`}
              cost={`490`}
              description={`FRA, 125`}
            />
          </Block>
        </div>
      </section>
      <section className="page">
        <div className="special">
          <div className="default_header special_mod">
            <h3>ПРОЕКТ ПС СПЕШЛ</h3>
            <div className="small"></div>
            <br />
            <Position
              name={`Little Helper Sweet \\ Sour \\ Bitter`}
              cost={`250`}
              description={`40мл, Наши фирменные настойки`}
            />
            <Position
              name={`Джин ПС`}
              cost={`420`}
              description={`330мл, С комбучей`}
            />
          </div>
          <img src="/3.PNG" alt="" />
        </div>
      </section>
      <br />
      <br />
      <section className="page">
        <div className="default_header">
          <h2>КРЕПКОЕ</h2>
          <div className="small"></div>
        </div>
        <div className="block_wrapper">
          <BlockSmall header="ГРАППА / КАЛЬВАДОС" milliliters="40 мл">
            <Position
              name={`Villa Cardea Reserva 18`}
              cost={`450`}
              description={`Граппа, ITA`}
            />
            <Position
              name={`Lelouvier Fine`}
              cost={`550`}
              description={`Кальвадос, FRA`}
            />
          </BlockSmall>
          <BlockSmall header="ДЖИН" milliliters="40 мл">
            <Position
              name={`Bombay Sapphire`}
              cost={`430`}
              description={`GBT`}
            />
            <Position name={`Roku`} cost={`470`} description={`JPN`} />
          </BlockSmall>
          <BlockSmall header="ТЕКИЛА И МЕСКАЛЬ" milliliters="40 мл">
            <Position
              name={`El Jimador`}
              cost={`450`}
              description={`Текила, MEX`}
            />
            <Position
              name={`Monte Alban Agave`}
              cost={`580`}
              description={`Мескаль , MEX`}
            />
          </BlockSmall>
          <BlockSmall header={'ПОРТВЕЙН / ХЕРЕС'} milliliters={'80 мл'}>
            <Position
              name={`Mackenzie’s Porto Tawny`}
              cost={`420`}
              description={`Портвейн, PRT`}
            />
            <Position
              name={`Kopke Fine Ruby`}
              cost={`580`}
              description={`Портвейн, PRT`}
            />
            <Position
              name={`Colosio Fino`}
              cost={`580`}
              description={`Херес, SPA`}
            />
          </BlockSmall>
          <BlockSmall header={'ВИСКИ И БУРБОН'} milliliters={'40 мл'}>
            <Position
              name={`Ballantine’s Finest`}
              cost={`330`}
              description={`SCT`}
            />
            <Position name={`Bushmills`} cost={`430`} description={`IRL`} />
            <Position
              name={`Shinobu Blended`}
              cost={`500`}
              description={`JPN`}
            />
            <Position
              name={`Glenmorangie 12`}
              cost={`550`}
              description={`SCT`}
            />
            <Position
              name={`Ardbeg Wee Beastie 5`}
              cost={`640`}
              description={`SCT`}
            />
            <Position name={`Singleton 12`} cost={`690`} description={`SCT`} />
            <Position name={`Talisker 10`} cost={`990`} description={`SCT`} />
            <Position name={`Maker’s Mark`} cost={`450`} description={`USA`} />
            <Position
              name={`Woodford Reserve`}
              cost={`500`}
              description={`USA`}
            />
            <Position
              name={`Bulleit Bourbon`}
              cost={`520`}
              description={`USA`}
            />
          </BlockSmall>
          <BlockSmall header={'ДИСТИЛЯТ'} milliliters={'40 мл'}>
            <Position name={`Schnaps`} cost={`350`} description={`AUS`} />
            <Position name={`Aquavit Linie`} cost={`430`} description={`NOR`} />
            <Position name={`Полугар`} cost={`520`} description={`RUS`} />
          </BlockSmall>
          <BlockSmall header={'ВЕРМУТ'} milliliters={'80 мл'}>
            <Position
              name={`Guerra Reserva`}
              cost={`430`}
              description={`SPA`}
            />
            <Position name={`Lillet Blanc`} cost={`430`} description={`FRA`} />
            <Position
              name={`Starlino Orange / Rosso`}
              cost={`580`}
              description={`ITA`}
            />
          </BlockSmall>
          <BlockSmall header={'ДИЖЕСТИВ'} milliliters={'40 /80 мл'}>
            <Position
              name={`Fruko Schulz Bitter`}
              cost={`390`}
              description={`CZE`}
            />
            <Position
              name={`Petrone Limoncello`}
              cost={`390`}
              description={`ITA`}
            />
            <Position name={`Fernet Branca`} cost={`430`} description={`ITA`} />
            <Position
              name={`Lelouvier de Normandie`}
              cost={`690`}
              description={`FRA`}
            />
          </BlockSmall>
          <BlockSmall header={'РОМ'} milliliters={'40 мл'}>
            <Position
              name={`Viejo de Caldas 3`}
              cost={`430`}
              description={`COL`}
            />
            <Position
              name={`Zacapa Centenario 23`}
              cost={`780`}
              description={`GTM`}
            />
          </BlockSmall>
        </div>
      </section>
      <section className="page">
        <div className="default_header">
          <h2>НОН АЛКО</h2>
          <div className="small"></div>
        </div>
        <div className="block_wrapper">
          <Block header="">
            <Position
              name={`Dreamteam Sport Pilsner`}
              cost={`350`}
              description={`Лагер, 330 мл`}
            />
            <Position
              name={`Jaws Pineapple \\ Passionfruit \\ Apricot`}
              cost={`420`}
              description={`Фруктовое, 500 мл`}
            />
            <Position
              name={`Schneider Weisse TAP 3`}
              cost={`420`}
              description={`Пшеничное, 500 мл`}
            />
            <Position
              name={`Bullevie Petit`}
              cost={`420`}
              description={`Сидр, 330 мл`}
            />
            <Position
              name={`Big Drop Pine Trail`}
              cost={`480`}
              description={`Пэйл Эль, 330 мл`}
            />
            <Position
              name={`Big Drop Galactic`}
              cost={`480`}
              description={`Темное, 330 мл`}
            />
            <Position
              name={`Samuel Smith Brown Ale`}
              cost={`500`}
              description={`Янтарный эль, 330 мл`}
            />
          </Block>
          <Block header="Б/А НАПИТКИ ХОЛОДНЫЕ">
            <Position
              name={`Скоби Проект П.С.`}
              cost={`200`}
              description={`Комбуча, 330мл`}
            />
            <Position
              name={`Фрэш джус апельсин`}
              cost={`300`}
              description={`250 мл`}
            />
            <Position
              name={`Эспрессо тоник`}
              cost={`300`}
              description={`На комбуче, 330 мл`}
            />
            <Position
              name={`Кокосовая вода`}
              cost={`350`}
              description={`330 мл`}
            />
            <Position
              name={`Лимонад Fritz`}
              cost={`420`}
              description={`330 мл`}
            />
          </Block>
          <Block header="КОФЕ / ЧАЙ">
            <Position name={`Эспрессо`} cost={`200`} description={`40 мл`} />
            <Position name={`Американо`} cost={`200`} description={`200 мл`} />
            <Position
              name={`с молоком`}
              cost={`300`}
              description={`200/300 мл`}
            />
            <Position
              name={`Фильтр кофе`}
              cost={`200`}
              description={`200 мл`}
            />
            <Position
              name={`Чайник чая`}
              cost={`300`}
              description={`Черный / зеленый / иван-чай / фруктовый 500 мл`}
            />
          </Block>
        </div>
      </section>
      <section className="page">
        <div className="kitchen_header">
          <h2>К У Х Н Я</h2>
          <div>11:00-16:00</div>
          <span>
            Пожалуйста, сообщите нам, если у вас есть аллергия на какие-либо
            продукты
          </span>
        </div>
        <div className="block_wrapper">
          <Block header="ЗАВТРАК">
            <Position
              name={`Овсяная каша`}
              cost={`350`}
              description={`c вишневым вареньем и бананом`}
            />
            <Position
              name={`Омлет с колбаской`}
              cost={`400`}
              description={`нежный омлет с колбаской на гриле и луком сибулет`}
            />
            <Position
              name={`Френч тост с бананом`}
              cost={`480`}
              description={`соленой карамелью и ананасом на гриле`}
            />
            <Position
              name={`Тост с тунцом`}
              cost={`500`}
              description={`и скрэмблом`}
            />
            <Position
              name={`Сырный сендвич`}
              cost={`550`}
              description={`с двумя видами сыра, ветчиной и глазуньей`}
            />
            <Position
              name={`Бан с лососем`}
              cost={`550`}
              description={`свежевыпеченный бан со сливочным сыром и лососем`}
            />
            <Position
              name={`Лосось с яйцом пашот`}
              cost={`650`}
              description={`на картофельных драниках с соусом голландез`}
            />
            <Position
              name={`Банановый кекс`}
              cost={`250`}
              description={`с заварным кремом`}
            />
          </Block>
          <Block header="И НЕ ТОЛЬКО">
            <Position
              name={`Пряная картошка фри`}
              cost={`350`}
              description={`с соусом на выбор: анчоусный / сливочный хойсин /
              сырный / 999 островов`}
            />
            <Position
              name={`Куриный бульон`}
              cost={`350`}
              description={`с куриными наггетсами`}
            />
            <Position
              name={`Картофельный суп`}
              cost={`390`}
              description={`подается с хрустящими опятами`}
            />
            <Position
              name={`Хот-Дог в булочке бан`}
              cost={`390`}
              description={`с сосиской из свинины, коул слоу и кимчи майонезом`}
            />
            <Position
              name={`Классический бургер`}
              cost={`690`}
              description={`говяжья котлета на домашнем хлебе`}
            />
          </Block>
        </div>
      </section>
      <section className="page">
        <div className="kitchen_header">
          <h2>К У Х Н Я</h2>
          <div>16:00-1:30</div>
          <span>
            Пожалуйста, сообщите нам, если у вас есть аллергия на какие-либо
            продукты
          </span>
        </div>
        <div className="block_wrapper">
          <Block header="СТАРТЕРЫ">
            <Position
              name={`Попкорн`}
              cost={`250`}
              description={`с соленой карамелью`}
            />
            <Position
              name={`Ореховый микс`}
              cost={`390`}
              description={`в пряной глазури из стаута и кленового сиропа`}
            />
            <Position
              name={`Оливки гиганти`}
              cost={`490`}
              description={`в оливковом масле и специях`}
            />
            <Position
              name={`Мясная тарелка`}
              cost={`750`}
              description={`сальсича, бастурма, вяленная утка. Подается с тартином, горчицей и хрустящими огурчиками`}
            />
          </Block>
          <Block header="СУПЫ">
            <Position
              name={`Куриный бульон`}
              cost={`350`}
              description={`с куриными наггетсами`}
            />
            <Position
              name={`Картофельный суп`}
              cost={`390`}
              description={`подается с хрустящими опятами`}
            />
          </Block>
          <Block header="ЗАКУСКИ">
            <Position
              name={`Пряная картошка фри`}
              cost={`350`}
              description={`с соусом на выбор: анчоусный / сливочный хойсин /
              сырный / 999 островов`}
            />
            <Position
              name={`Спайси Пиклз`}
              cost={`350`}
              description={`со сметаной и укропом`}
            />
            <Position
              name={`Маринованная свекла с соусом кешью`}
              cost={`360`}
              description={`маринуется в уксусе из собственной комбучи`}
            />
            <Position
              name={`Костный мозг`}
              cost={`360`}
              description={`на бородинском хлебе, карамелизированный в квасном сусле`}
            />
            <Position
              name={`Страчателла с кабачками`}
              cost={`390`}
              description={`каперсами и цедрой лимона`}
            />
            <Position
              name={`Сырная кукуруза`}
              cost={`390`}
              description={`в сырном соусе и панировке из начос и лука`}
            />
            <Position
              name={`Моцарелла с клюквенным джемом`}
              cost={`430`}
              description={`в панировке из кукурузных хлопьев`}
            />
            <Position
              name={`Салат “Цезарь”`}
              cost={`440`}
              description={`хрустящий айсберг, куриное бедро, соус цезарь и перечный сыр`}
            />
            <Position
              name={`Хрустящие куриные бедра`}
              cost={`440`}
              description={`в чили масле, на тостовом хлебе. Подаются с коул-слоу`}
            />
            <Position
              name={`Картофельные драники`}
              cost={`640`}
              description={`со сметаной и красной икрой`}
            />
          </Block>
          <Block header="ГОРЯЧЕЕ">
            <Position
              name={`Пряные кабачки`}
              cost={`390`}
              description={`со специями и кинзой`}
            />
            <Position
              name={`Цветная капуста`}
              cost={`390`}
              description={`c ореховым соусом и арахисом`}
            />
            <Position
              name={`Хот-Дог в булочке бан`}
              cost={`390`}
              description={`с сосиской из свинины, коул слоу и кимчи майонезом`}
            />
            <Position
              name={`Фалафель 2.0`}
              cost={`440`}
              description={`с хумусом, аджикой, йогуртом и питой`}
            />
            <Position
              name={`Чили Чиз Фрайз`}
              cost={`490`}
              description={`с чили кон карне, сырным соусом, маринованными огурчиками и халапеньо`}
            />
            <Position
              name={`Кесадилья`}
              cost={`490`}
              description={`с курицей, сыром, томатной сальсой и ананасом`}
            />
            <Position
              name={`Фиш энд Чипс 2.0`}
              cost={`660`}
              description={`с картофелем фри и коуол-слоу`}
            />
            <Position
              name={`Классический бургер`}
              cost={`690`}
              description={`говяжья котлета на домашнем хлебе`}
            />
          </Block>
          <Block header="ДЕСЕРТЫ">
            <Position
              name={`Банановый кекс`}
              cost={`250`}
              description={`с заварным кремом`}
            />
            <Position
              name={`Шоколадный брауни `}
              cost={`390`}
              description={`с соленой карамелью и фундуком`}
            />
            <Position
              name={`Френч тост с бананом`}
              cost={`430`}
              description={`c соленой карамелью и ананасом на гриле`}
            />
          </Block>
        </div>
        <img style={{ width: '100px' }} src="/5.PNG" alt="" />
      </section>
      {/* <BlockSmall header={''} milliliters={''}></BlockSmall>
          <Block header=''></Block>
          <Position name={``} cost={``} description={``}/> */}
    </div>
  );
}

export default App;
