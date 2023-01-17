import { connect } from "react-redux";
import LoginComponent from "../components/LoginComponent";
import SignupComponent from "../components/SignupComponent";
import { register } from "../services/Actions/action";

const mapDispatchToProps = (dispatch) => ({
        registerHandler: (user) => {
            dispatch(register(user))
    }
});

export default connect (null, mapDispatchToProps) (SignupComponent);