import React from "react";
import {Link} from "react-router-dom"
import "./Navigation.css";
function Navigation() {
    return (
    <div className="nav">
        <Link to="/Home">Home</Link>
        {/* React 라우터에 의해 주어진 props를 이용해서
        각각 Movie 카드를 클릭하면 Movie 디테일을 들고 다른 페이지로 갈 수 있도록 */}
        <Link to="About">About</Link>
        {/* to를 object로 교체할 수 있다. */}
        <Link to={{
            pathname: "/movie-detail",
            state: {
                fromNavigation : true
            }
            /* /about 링크로 state Object(=props) 를 보낸다. 
            이게 어떤거냐면 jQuery로 /about&id=1?bid=2019 이렇게 보내야 했던걸
            숨겨서 보낼 수 있다는 말이다. */
        }}></Link>
    </div>
    )
    /* 근데 a 태그를 쓰면 React 답지 않게 누를 때마다 새로고침이 되어버림 4
    왜? 저건 그냥 Html 코드이기 때문이다. 저걸 누르면 React가 죽어버리고 그냥 새로운
    홈페이지가 생성됨 */
    /* 그래서 a태그 대신 Link 태그 사용 */

    /* Link 태그가 들어간 컴포넌트는 HashRouter 밖에서 사용할 수 없다.
    즉, Navigation 링크가 HashRouter 링크 밖으로 나가버리면 사용 불가능 */
}

export default Navigation