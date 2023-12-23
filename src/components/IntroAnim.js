import React, {createRef, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import theme from "../styles/Theme";
import MyPseudo from "../content/Pseudo"

const StyledIntroAnim = styled.div`
  z-index: 101;
  opacity: 1;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.primary};
  transition: 1s ease;
  .name{
    position: absolute;
    display: flex;
    div{
      font-size: 35px;
      transition: 1s ease;
      span{
        position: relative;
        top: 0;
        color: ${theme.colors.fifth};
      }
      span:nth-child(1){
        animation: start 1s ease-in-out;
        color: ${theme.colors.secondary};
      }
      .fade{
        animation: fadeout 1s ease;
      }
      @keyframes fadeout{
        0%{
          opacity: 1;
        }
        100%{
          opacity: 0;
        }
      }
      @keyframes start {
        0%{
          top: 100px;
          opacity: 0;
        }
        100%{
          top: 0;
          opacity: 1;
        }
      }
    }
  }
`

const IntroAnim = () => {
    const myName = MyPseudo.name;

    const [names, setNames] = useState([]);
    const [hidden, setHidden] = useState(false);
    const [preHidden, setPreHidden] = useState(false);
    const [move, setMove] = useState(false);
    const [toTheBottom, setToTheBottom] = useState(false);
    const [dropAll, SetDropAll] = useState(false);

    const pageRef = useRef();
    const [pageSize, setPageSize] = useState();

    const nameContainer = useRef();
    const [nameSize, setNameSize] = useState();

    const divRefs = useRef([]);
    const [divWidths, setDivWidths] = useState([]);
    const spanRefs = useRef([]);
    const [spanWidths, setSpanWidths] = useState([]);

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        let name = myName.split(' ');
        let tab = [];
        for(let i = 0; i < name.length; i++){
            tab.push(name[i]);
        }
        setNames(tab);
        setTimeout(() => {
            setPreHidden(true);
        }, 2000)
        setTimeout(() => {
            setHidden(true);
        }, 3000)
        setTimeout(() => {
            setMove(true);
        }, 4000)
        setTimeout(() => {
            setToTheBottom(true);
        }, 4400)
        setTimeout(() => {
            SetDropAll(true);
        }, 5500)
    }, [])

    useEffect(() => {
        if(pageRef.current){
            setPageSize({
                width: pageRef.current.offsetWidth,
                height: pageRef.current.offsetHeight
            })
        }
        if(nameContainer.current){
            setNameSize({
                width: nameContainer.current.offsetWidth,
                height: nameContainer.current.offsetHeight
            });
        }
    }, [names, move])

    useEffect(() => {
        let table = [];
        spanRefs.current.forEach((ref, idx) => {
            if (ref.current) {
                table.push(ref.current.offsetWidth);
            }
        });
        setSpanWidths(table);
    }, [names]);

    useEffect(() => {
        let table = [];
        divRefs.current.forEach((ref, idx) => {
            if (ref.current) {
                table.push(ref.current.offsetWidth);
            }
        });
        setDivWidths(table);
    }, [names]);

    function rightBottom(){
        if(move && !toTheBottom){
            const right = (pageSize?.width/2) - (nameSize?.width / 2);
            const bottom = (pageSize?.height/2) - (nameSize?.height / 2);
            return {right: right, bottom: bottom};
        }
        if(toTheBottom){
            if(windowSize.width > 1050){
                return {right: 50, bottom: 20,  transition: "1s ease-in-out"};
            }else if (windowSize.width < 1050 && windowSize.width > 800){
                return {right: 35, bottom: 20,  transition: "1s ease-in-out"};
            }else if (windowSize.width < 800){
                return {right: 15, bottom: 20,  transition: "1s ease-in-out"};
            }
        }
        return {};
    }


    return(
        <>
            {windowSize.width > 700 &&
                <StyledIntroAnim ref={pageRef} style={{opacity: dropAll ? 0 : 1}}>
                    <div className="name" ref={nameContainer} style={rightBottom()}>
                        {
                            names.map((name, idx) => {
                                // eslint-disable-next-line react-hooks/rules-of-hooks,no-undef
                                const divRef = divRefs.current[idx] || (divRefs.current[idx] = createRef());
                                const spanRef = spanRefs.current[idx] || (spanRefs.current[idx] = createRef());
                                return(
                                    <div key={idx} ref={divRef}
                                         style={{width: hidden ? spanWidths[idx] : divWidths[idx],
                                             margin: hidden ? "0px" : "10px"}}>
                                        {
                                            name.split('').map((letter, idx) => {
                                                return(
                                                    <span ref={idx===0 ? spanRef : null} className={preHidden ? "fade" : ""} style={{display: hidden && idx!==0 ? 'none' : ''}}>{letter}</span>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </StyledIntroAnim>
            }
        </>
    )
}

export default IntroAnim;