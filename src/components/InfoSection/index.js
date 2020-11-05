import React from 'react'
import Icon1 from '../../images/korea1.jpg'
import Icon2 from '../../images/korea2.jpg'
import Icon3 from '../../images/korea3.jpg'

const InfoSection = () => {
    return (
        <div className="container-info">

            <input type="radio" name="images" id="i1" checked></input>
            <input type="radio" name="images" id="i2"></input>
            <input type="radio" name="images" id="i3"></input>

            <div className="slide_img" id="one" >
                <img alt="" src={Icon1} />
                <label for="i3" class="pre"></label>
                <label for="i2" class="next"></label>
            </div>
            <div className="slide_img" id="two" >
                <img alt="" src={Icon2} />
                <label for="i1" class="pre"></label>
                <label for="i3" class="next"></label>
            </div>
            <div className="slide_img" id="three">
                <img alt="" src={Icon3} />
                <label for="i2" class="pre"></label>
                <label for="i1" class="next"></label>
            </div>

            <div className="nav">
                <label class="dots"  id="dot1" for="i1"></label>
                <label class="dots"  id="dot2" for="i2"></label>
                <label class="dots"  id="dot3" for="i3"></label>
            </div>    

        </div>
    )
}

export default InfoSection
