const homeElement = document.getElementById('home-btn')
const aboutElement = document.getElementById('about-btn')
const kindelElement = document.getElementById('kindel-btn')
const bodyElement = document.getElementById('display-body')

homeElement.addEventListener('click',homeFunction)
aboutElement.addEventListener('click',aboutFunction)
kindelElement.addEventListener('click',kindelFunction)

function removeClass(){
    homeElement.classList = 'btn'
    aboutElement.classList = 'btn'
    kindelElement.classList = 'btn'
    
}

function homeFunction(){
    removeClass()
    homeElement.classList = 'active'
    const newElement1 = `HOME : 
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dicta veritatis incidunt quas. Vel, quo. Ut
    quibusdam adipisci praesentium accusamus voluptatem blanditiis reprehenderit repellendus quam quas dolor? Amet ipsum
    deserunt explicabo quam neque ducimus assumenda, asperiores iusto inventore minima provident porro quos officia ut
    consequatur velit repudiandae eveniet cumque molestiae est nihil! Deserunt similique hic enim cum perferendis porro
    ut. Excepturi delectus dignissimos corrupti nobis commodi temporibus earum porro, laborum aspernatur? Facilis
    provident laboriosam, quia rem nisi reprehenderit eligendi? Ad excepturi exercitationem quam vel ullam, omnis sequi
    eos amet, voluptatibus, earum impedit? Commodi nihil soluta porro maiores veniam tempore cumque voluptas. Temporibus
    labore id sint eveniet. Minima magni quas repudiandae repellendus! Fugiat impedit dolor iure nesciunt numquam, sint
    dolorum officiis aperiam? Reiciendis, consectetur. Repellendus sunt cupiditate excepturi earum perferendis! Iusto
    aut suscipit officiis dolorum facere cum nihil fugit illo numquam earum nulla minus illum, maiores sunt harum
    quaerat nisi, explicabo rerum perferendis optio quos quia voluptas laboriosam! Accusamus repellat ex excepturi illo
    repellendus impedit voluptate est facilis nulla assumenda odio explicabo sit, porro, nostrum repudiandae. Architecto
    error nulla quod provident accusamus, odit libero quaerat facere sint iste sequi quidem saepe maxime asperiores
    pariatur numquam, magnam maiores optio? Quas, dolore praesentium.
`
    bodyElement.innerHTML = newElement1
}
function aboutFunction(){
    removeClass() 
    aboutElement.classList = 'active'
    const newElement2 = `About Us :
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dicta veritatis incidunt quas. Vel, quo. Ut
    quibusdam adipisci praesentium accusamus voluptatem blanditiis reprehenderit repellendus quam quas dolor? Amet ipsum
    deserunt explicabo quam neque ducimus assumenda, asperiores iusto inventore minima provident porro quos officia ut
    consequatur velit repudiandae eveniet cumque molestiae est nihil! Deserunt similique hic enim cum perferendis porro
    ut. Excepturi delectus dignissimos corrupti nobis commodi temporibus earum porro, laborum aspernatur? Facilis
    provident laboriosam, quia rem nisi reprehenderit eligendi? Ad excepturi exercitationem quam vel ullam, omnis sequi
    eos amet, voluptatibus, earum impedit? Commodi nihil soluta porro maiores veniam tempore cumque voluptas. Temporibus
    labore id sint eveniet. Minima magni quas repudiandae repellendus! Fugiat impedit dolor iure nesciunt numquam, sint
    dolorum officiis aperiam? Reiciendis, consectetur. Repellendus sunt cupiditate excepturi earum perferendis! Iusto
    aut suscipit officiis dolorum facere cum nihil fugit illo numquam earum nulla minus illum, maiores sunt harum
    quaerat nisi, explicabo rerum perferendis optio quos quia voluptas laboriosam! Accusamus repellat ex excepturi illo
    repellendus impedit voluptate est facilis nulla assumenda odio explicabo sit, porro, nostrum repudiandae. Architecto
    error nulla quod provident accusamus, odit libero quaerat facere sint iste sequi quidem saepe maxime asperiores
    pariatur numquam, magnam maiores optio? Quas, dolore praesentium.
    `
    bodyElement.innerHTML = newElement2

}

function kindelFunction(){
    removeClass()
    kindelElement.classList = 'active'
    const newElement3 = `Kindel :
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit dicta veritatis incidunt quas. Vel, quo. Ut
    quibusdam adipisci praesentium accusamus voluptatem blanditiis reprehenderit repellendus quam quas dolor? Amet ipsum
    deserunt explicabo quam neque ducimus assumenda, asperiores iusto inventore minima provident porro quos officia ut
    consequatur velit repudiandae eveniet cumque molestiae est nihil! Deserunt similique hic enim cum perferendis porro
    ut. Excepturi delectus dignissimos corrupti nobis commodi temporibus earum porro, laborum aspernatur? Facilis
    provident laboriosam, quia rem nisi reprehenderit eligendi? Ad excepturi exercitationem quam vel ullam, omnis sequi
    eos amet, voluptatibus, earum impedit? Commodi nihil soluta porro maiores veniam tempore cumque voluptas. Temporibus
    labore id sint eveniet. Minima magni quas repudiandae repellendus! Fugiat impedit dolor iure nesciunt numquam, sint
    dolorum officiis aperiam? Reiciendis, consectetur. Repellendus sunt cupiditate excepturi earum perferendis! Iusto
    aut suscipit officiis dolorum facere cum nihil fugit illo numquam earum nulla minus illum, maiores sunt harum
    quaerat nisi, explicabo rerum perferendis optio quos quia voluptas laboriosam! Accusamus repellat ex excepturi illo
    repellendus impedit voluptate est facilis nulla assumenda odio explicabo sit, porro, nostrum repudiandae. Architecto
    error nulla quod provident accusamus, odit libero quaerat facere sint iste sequi quidem saepe maxime asperiores
    pariatur numquam, magnam maiores optio? Quas, dolore praesentium..
    `
    bodyElement.innerHTML = newElement3

}