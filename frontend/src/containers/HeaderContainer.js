import { connect } from "react-redux";
import Header from "../components/header";
import { login, logout } from "../services/Actions/action";

const mapStatetoProps = (state) => {
    return {
        isLoggedIn : state.reducer.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => ({
    logoutHandler : () => dispatch(logout())
})


export default connect (mapStatetoProps, mapDispatchToProps) (Header);




 