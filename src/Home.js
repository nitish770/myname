import React from "react";
import './style.css';

function Home()
{

    return(
        <>
           <center >
           
            <form name="frm" className="from">
            <h1 className="sname">Student Registration From</h1>
                <table>
                
                    <tr>
                        <td>First Name</td>
                        <td><input type="text" placeholder="Enter your name" ></input> </td>
                    </tr><br/>
                    <tr>
                        <td>Last Name</td>
                        <td><input type="text" placeholder="Last  name"></input> </td>
                    </tr><br/>
                    <tr>
                        <td>Email ID</td>
                        <td><input type="text" placeholder="Email "></input> </td>
                    </tr><br/>
                    <tr>
                        <td>Mobile Number</td>
                        <td><input type="text" placeholder="+91"></input> </td>
                    </tr><br/>
                    <tr>
                        <td>Gender</td>
                        <td><input type="radio" name="g"></input>Male <input type="radio" name="g"></input>Female</td>
                    </tr><br/>
                    <tr>
                        <td>Date of Birth</td>
                        <td><input type="date" min="1990" max="2030"></input> </td>
                    </tr><br/>
                    <tr>
                        <td>Address</td>
                        <td><textarea name="ad" cols="35" rows="9" placeholder="Address"></textarea> </td>
                    </tr><br/>
                    <tr>
                        <td>City</td>
                        <td><input type="text" placeholder="City" id="id1"></input></td>
                    </tr><br/>
                    <tr>
                        <td>Pin Code</td>
                        <td><input type="Code" placeholder="206308" id="id1"></input></td>
                    </tr><br/>
                    <tr>
                        <td>State</td>
                        <td><input type="text" placeholder="State" id="id1"></input></td>
                    </tr><br/>
                    <tr>
                        <td>Country</td>
                        <td><input type="text" placeholder="India" id="id1"></input></td>
                    </tr><br/>
                    <tr>
                        <td>Hobbies</td>
                        <td><input type="checkbox" name="g"></input>Reading English paper<input type="checkbox" name="g"></input>Dance<input type="checkbox" name="g"></input>Singing<input type="checkbox" name="g"></input>Others</td>
                    </tr><br/>
                    <tr>
                        <td>Qualification</td>
                        <td> <input type="checkbox"></input>High Schoole(10th)</td>
                    </tr>
                    <tr>
                    <td></td>
                    <td> <input type="checkbox"></input>Highar Schoole(12th)</td>
                    </tr>
                    <tr>
                    <td></td>
                    <td> <input type="checkbox"></input>Graduation(Bachelors)</td>
                    </tr>
                    <tr>
                    <td></td>
                    <td> <input type="checkbox"></input>Post Graduation(Master)</td>
                    </tr>
                    <tr>
                    <td></td>
                    <td> <input type="checkbox"></input>Phd</td>
                    </tr><br></br>
                    <tr>
                        <td>Courses Applied for</td>
                        <td> <input type="radio"></input>BCA(Bachelor of Computer)</td>
                    </tr>
                    <tr>
                    <td></td>
                    <td> <input type="radio"></input>B.com(Bachelor of Commerce)</td>
                    </tr>
                    <tr>
                    <td></td>
                    <td> <input type="radio"></input>B.sc(Bachelor of Scince)</td>
                    </tr>
                    <tr>
                    <td></td>
                    <td> <input type="radio"></input>BA(Bachelor of Arts)</td>
                    </tr>
                    <tr>
                    <td></td>
                    <td> <input type="radio"></input>MCA(Master of Computer Application)</td>
                    </tr>
                    <tr>
                    <td></td>
                    <td> <input type="radio"></input>M.com(Master of Commerce)</td>
                    </tr>
                    <tr>
                    <td></td>
                    <td> <input type="radio"></input>M.Sc(Master of Scince)</td>
                    </tr>
                    <tr>
                    <td></td>
                    <td> <input type="radio"></input>MA(Master of Arts)</td>
                    </tr><br/>
                    <tr>
                        <td></td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                        <input type="Submit" id="btn" ></input> <input type="Reset" id="btn"></input> </td>
                    </tr>
                </table>
            </form>
           </center>
        </>
        
    )       
    
}
export default Home;
