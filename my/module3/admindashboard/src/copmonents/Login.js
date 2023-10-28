import React from 'react'
import Google from '../img/google-icon.png'
import Facebook from '../img/facebook.jpg';

export default function Login() {
    return (
        <div>
            <section class="vh-100" style={{backgroundColor: "#212121"}}>
                <div class="container">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card shadow-2-strong" style={{borderRadius: "1rem"}}>
                                <div class="card-body p-5 text-center">
                                    <h3 class="mb-5">Admin Login</h3>

                                    <div class="form-outline mb-4">
                                        <input type="email" id="typeEmailX-2" class="form-control form-control-lg" placeholder='example@example.com' />
                                        {/* <label class="form-label" for="typeEmailX-2">Email</label> */}
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder='Password' />
                                        {/* <label class="form-label" for="typePasswordX-2">Password</label> */}
                                    </div>


                                    <div class="form-check d-flex justify-content-start mb-2">
                                        <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                                        <label class="form-check-label ms-2" for="form1Example3"> Remember password </label>
                                    </div>

                                    <button class="btn btn-dark btn-lg btn-block w-100" type="submit">Login</button>

                                    <hr class="my-4" />

                                    <button class="btn btn-block btn-primary w-100 mb-2 mx-auto" style={{backgroundColor:"#4285F4"}}
                                        type="submit"><img src={Google} alt='google-logo' className='img-fluid float-start' width={25} /> Sign in with google</button>
                                    <button class="btn btn-block btn-primary w-100 mb-2" style={{backgroundColor:"#3b5998"}}
                                        type="submit"><img src={Facebook} alt='google-logo' className='img-fluid float-start' width={25} />Sign in with facebook</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
