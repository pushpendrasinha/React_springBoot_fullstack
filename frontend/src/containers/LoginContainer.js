import { connect } from "react-redux";
import LoginComponent from "../components/LoginComponent";
import { login, logout } from "../services/Actions/action";

const mapStatetoProps = (state) => {
    return{
        // user: state.user,
      isLoggedIn : state.reducer.isLoggedIn
    }    
};

const mapDispatchToProps = (dispatch) => ({
    loginHandler: user => dispatch(login(user))
})

export default connect(mapStatetoProps ,mapDispatchToProps )(LoginComponent);

// export default LoginComponent;