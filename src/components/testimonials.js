import "../App.css";
import React, { Component } from "react";
import {
  Med_Title,
  IntBodyText,
  MedIntBodyText,
  SmIntBodyText,
} from "../styles/fonts";
import { AboutContainer, TitleHolder } from "../styles/Containers";
import {
  TestCard,
  TestTextHolder,
  IconHolder,
  TestNameHolder,
  TestIcon,
  NameHolder,
} from "../styles/styles";
import { IoPersonSharp, IoPerson } from "react-icons/io5";

class Testimonial extends Component {
  render() {
    return (
      <div className="Testimonial-Section">
        <TitleHolder>
          <Med_Title>What my mates have to say...</Med_Title>
        </TitleHolder>

        <AboutContainer>
          <TestCard>
            <TestTextHolder>
              <MedIntBodyText>
                “You have an amazing eye for design. You accurately capture
                every element I design. I'm glad to be working with you.”
              </MedIntBodyText>
            </TestTextHolder>

            <TestNameHolder>
              <IconHolder>
                <TestIcon>
                  <IoPerson className="TestIcons" />
                </TestIcon>
              </IconHolder>

              <NameHolder>
                <MedIntBodyText>Kirsten Fraser</MedIntBodyText>
                <SmIntBodyText>Designer</SmIntBodyText>
              </NameHolder>
            </TestNameHolder>
          </TestCard>

          <TestCard>
            <TestTextHolder>
              <MedIntBodyText>
                “Shiluva is a good team player, a fast learner and has a good
                eye for design. I enjoyed working with her, she’s a hard worker
                and always pays attention to detail .”
              </MedIntBodyText>
            </TestTextHolder>

            <TestNameHolder>
              <IconHolder>
                <TestIcon>
                  <IoPerson className="TestIcons" />
                </TestIcon>
              </IconHolder>

              <NameHolder>
                <MedIntBodyText>Danny Simfukwe</MedIntBodyText>
                <SmIntBodyText>Senior Developer</SmIntBodyText>
              </NameHolder>
            </TestNameHolder>
          </TestCard>
          <TestCard>
            <TestTextHolder>
              <MedIntBodyText>
                “wow! Shiluva writes efficient clean code. It was great working
                with her”
              </MedIntBodyText>
            </TestTextHolder>

            <TestNameHolder>
              <IconHolder>
                <TestIcon>
                  <IoPerson className="TestIcons" />
                </TestIcon>
              </IconHolder>

              <NameHolder>
                <MedIntBodyText>Lwazi Nontuma</MedIntBodyText>
                <SmIntBodyText>Designer</SmIntBodyText>
              </NameHolder>
            </TestNameHolder>
          </TestCard>
        </AboutContainer>
      </div>
    );
  }
}

export default Testimonial;
