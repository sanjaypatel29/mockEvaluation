import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AdminPanel } from './AdminPanel'
import { connect } from "react-redux";


function PrivateRoutes(isAuth) {
  console.log(isAuth)
  return (
    <>
      {
        isAuth ? (
          <Route path="/admin" render={() => <AdminPanel />} />
        ) : (
            <Redirect to="/Login" />
          )
      }

    </>
  );

}



const mapStateToProps = (state) => ({
  isAuth: state.isAuth,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes);
