import React, {useEffect, useState} from "react";
import './UserDetail.css'
import axios from "axios";

const UserDetail = (props) => {
    const initUserSate = {
        id: null, username: '', first_name: '', last_name: '', email: '', phone: '', gender: '', photo: null
    }
    const [user, setUser] = useState(initUserSate)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_ROOT_V1}user/${props.match.params.id}`).then((response) => {
            setUser(response.data)
        })
    }, [ ])

    return (
        <div>
            <div className="row">
                <div className="col-10">
                    <h2 className="page-header">User Profile</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <div className="container">
                                <div className="team-single">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-5 xs-margin-30px-bottom">
                                            <div className="team-single-img">
                                                <img src={user?.photo}/>
                                            </div>
                                            <div
                                                className="bg-light-gray padding-30px-all md-padding-25px-all sm-padding-20px-all text-center">
                                                <h4 className="margin-10px-bottom font-size24 md-font-size22 sm-font-size20 font-weight-600">
                                                    {user?.first_name} {user?.last_name}
                                                </h4>
                                                <p className="sm-width-95 sm-margin-auto">

                                                </p>
                                                <div className="margin-20px-top team-single-icons">
                                                    <ul className="no-margin">
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <i className="fab fa-facebook-f"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <i className="fab fa-twitter"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <i className="fab fa-google-plus-g"/>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">
                                                                <i className="fab fa-instagram"/>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-8 col-md-7">
                                            <div className="team-single-text padding-50px-left sm-no-padding-left">
                                                <h4 className="font-size20 sm-font-size32 xs-font-size30">
                                                    Software Engineer
                                                </h4>
                                                <p className="no-margin-bottom">
                                                    I am very interested to work as a Software Engineer in a Company where robust problem-solving skills
                                                    required, following software engineering best practices and culture and provides potential avenues for
                                                    learning, growing and achieving the top level in the hierarchy of the organization
                                                </p>
                                                <div className="contact-info-section margin-40px-tb">
                                                    <ul className="list-style9 no-margin">
                                                        <li>

                                                            <div className="row">
                                                                <div className="col-md-5 col-5">
                                                                    <i className="fas fa-graduation-cap text-orange"/>
                                                                    <strong
                                                                        className="margin-10px-left text-orange">Degree:</strong>
                                                                </div>
                                                                <div className="col-md-7 col-7">
                                                                    <p>Master's Degrees</p>
                                                                </div>
                                                            </div>

                                                        </li>
                                                        <li>

                                                            <div className="row">
                                                                <div className="col-md-5 col-5">
                                                                    <i className="far fa-gem text-yellow"/>
                                                                    <strong
                                                                        className="margin-10px-left text-yellow">Exp.:</strong>
                                                                </div>
                                                                <div className="col-md-7 col-7">
                                                                    <p>4 Year in Education</p>
                                                                </div>
                                                            </div>

                                                        </li>
                                                        <li>

                                                            <div className="row">
                                                                <div className="col-md-5 col-5">
                                                                    <i className="far fa-file text-lightred"/>
                                                                    <strong
                                                                        className="margin-10px-left text-lightred">Courses:</strong>
                                                                </div>
                                                                <div className="col-md-7 col-7">
                                                                    <p>Design Category</p>
                                                                </div>
                                                            </div>

                                                        </li>
                                                        <li>

                                                            <div className="row">
                                                                <div className="col-md-5 col-5">
                                                                    <i className="fas fa-map-marker-alt text-green"/>
                                                                    <strong
                                                                        className="margin-10px-left text-green">Address:</strong>
                                                                </div>
                                                                <div className="col-md-7 col-7">
                                                                    <p>Regina ST, London, SK.</p>
                                                                </div>
                                                            </div>

                                                        </li>
                                                        <li>

                                                            <div className="row">
                                                                <div className="col-md-5 col-5">
                                                                    <i className="fas fa-mobile-alt text-purple"/>
                                                                    <strong
                                                                        className="margin-10px-left xs-margin-four-left text-purple">Phone:</strong>
                                                                </div>
                                                                <div className="col-md-7 col-7">
                                                                    <p>(+44) 123 456 789</p>
                                                                </div>
                                                            </div>

                                                        </li>
                                                        <li>
                                                            <div className="row">
                                                                <div className="col-md-5 col-5">
                                                                    <i className="fas fa-envelope text-pink"/>
                                                                    <strong
                                                                        className="margin-10px-left xs-margin-four-left text-pink">Email:</strong>
                                                                </div>
                                                                <div className="col-md-7 col-7">
                                                                    <p><a
                                                                        href="javascript:void(0)">addyour@emailhere</a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <h5 className="font-size24 sm-font-size22 xs-font-size20">Professional
                                                    Skills</h5>

                                                <div className="sm-no-margin">
                                                    <div className="progress-text">
                                                        <div className="row">
                                                            <div className="col-7">Positive Behaviors</div>
                                                            <div className="col-5 text-right">40%</div>
                                                        </div>
                                                    </div>
                                                    <div className="custom-progress progress">
                                                        <div role="progressbar" aria-valuenow="70" aria-valuemin="0"
                                                             aria-valuemax="100" style={{width: "40%"}}
                                                             className="animated custom-bar progress-bar slideInLeft bg-sky"/>
                                                    </div>
                                                    <div className="progress-text">
                                                        <div className="row">
                                                            <div className="col-7">Teamworking Abilities</div>
                                                            <div className="col-5 text-right">50%</div>
                                                        </div>
                                                    </div>
                                                    <div className="custom-progress progress">
                                                        <div role="progressbar" aria-valuenow="70" aria-valuemin="0"
                                                             aria-valuemax="100" style={{width: "50%"}}
                                                             className="animated custom-bar progress-bar slideInLeft bg-orange"/>
                                                    </div>
                                                    <div className="progress-text">
                                                        <div className="row">
                                                            <div className="col-7">Time Management</div>
                                                            <div className="col-5 text-right">60%</div>
                                                        </div>
                                                    </div>
                                                    <div className="custom-progress progress">
                                                        <div role="progressbar" aria-valuenow="70" aria-valuemin="0"
                                                             aria-valuemax="100" style={{width: "60%"}}
                                                             className="animated custom-bar progress-bar slideInLeft bg-green"/>
                                                    </div>
                                                    <div className="progress-text">
                                                        <div className="row">
                                                            <div className="col-7">Excellent Communication</div>
                                                            <div className="col-5 text-right">80%</div>
                                                        </div>
                                                    </div>
                                                    <div className="custom-progress progress">
                                                        <div role="progressbar" aria-valuenow="70" aria-valuemin="0"
                                                             aria-valuemax="100" style={{width: "80%"}}
                                                             className="animated custom-bar progress-bar slideInLeft bg-yellow"/>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;
