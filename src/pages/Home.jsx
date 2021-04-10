import {lazy} from "react";
import './Home.css';

// import "./Homestyle";

import IntroContent from "../content/IntroContent.json";
import FeaturesContent from '../content/FeaturesContent.json';
import AboutContent from '../content/AboutContent.json';
import MiddleBlockContent from "../content/MiddleBlockContent.json";
import ContactContent from "../content/ContactContent.json";



const ContentBlock=lazy(()=> import("../ContentBlock"));
const Container=lazy(()=>import("../common/Container"));
const MiddleBlock=lazy(()=>import("../components/MiddleBlock"));
const ContactForm=lazy(()=>import("../components/ContactForm"));
const ScrollToTop = lazy(() => import("../common/ScrollToTop"));

const Home=()=>{
    return(
        <Container>
          <ScrollToTop/>  
            <ContentBlock
                type="right"
                first="true"
                title={IntroContent.title}
                content={IntroContent.text}
                button={IntroContent.button}
                icon="graphs.svg"
                id="intro"
            
            />

            <MiddleBlock
                title={MiddleBlockContent.title}
                content={MiddleBlockContent.content}
                section={MiddleBlockContent.section}
                id="How its working"
              
            />

            <ContentBlock
                type="left"
                title={FeaturesContent.title}
                content={FeaturesContent.text}
                icon="features1.png"
                id="features"
            />

            <ContentBlock
            type="right"
            title={AboutContent.title}
            content={AboutContent.text}
            content1={AboutContent.text1}
            content2={AboutContent.text2}
            content3={AboutContent.text3}
            section={AboutContent.section}
            icon="waving.svg"
            id="about"
            />

            <ContactForm
            title={ContactContent.title}
            content={ContactContent.text}
            id="contact"
            />
               
        </Container>
    );
};

export default Home;