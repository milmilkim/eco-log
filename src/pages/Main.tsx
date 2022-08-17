import { Link } from 'react-router-dom';

import Calendar from '../components/Main/Calendar';

import styled from 'styled-components';
import Record from '../components/Main/Record';
import Top from '../components/Main/Top';

export type Card = {
  nickname: String;
  bio?: String;
  tag: String[];
  message?: String;
  like: number;
};
const cardList: Card[] = [
  {
    nickname: '지구지키미',
    bio: '무가 없으면 유도 없으니까요',
    tag: ['친환경 상점 이용', '기부와 나눔', '냉난방 온도 적정 유지', '빨대 미사용', '소고기 냠냠'],
    message: '오늘은 깜빡하고 텀블러를 안 챙겼다... 내일은 챙기자',
    like: 2,
  },
  {
    nickname: '지구지키미',
    bio: '무가 없으면 유도 없으니까요',
    tag: ['친환경 상점 이용', '기부와 나눔', '냉난방 온도 적정 유지'],
    message: '오늘은 깜빡하고 텀블러를 안 챙겼다... 내일은 챙기자',
    like: 2,
  },
  {
    nickname: '지구지키미',
    bio: '무가 없으면 유도 없으니까요',
    tag: ['친환경 상점 이용', '기부와 나눔', '냉난방 온도 적정 유지'],
    message: '오늘은 깜빡하고 텀블러를 안 챙겼다... 내일은 챙기자',
    like: 2,
  },
  {
    nickname: '지구지키미',
    bio: '무가 없으면 유도 없으니까요',
    tag: ['친환경 상점 이용', '기부와 나눔', '냉난방 온도 적정 유지'],
    message: '오늘은 깜빡하고 텀블러를 안 챙겼다... 내일은 챙기자',
    like: 2,
  },
];
const Main = () => {
  return (
    <>
      <Top />
      <Calendar />
      <H1>실천 기록</H1>

      <Write>
        <Link to="/wirte">
          <p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.9999 20.4702H6.07992C5.17462 20.4676 4.30729 20.1061 3.66808 19.465C3.02887 18.8239 2.66992 17.9555 2.66992 17.0502V8.16023C2.66992 7.25492 3.02887 6.38655 3.66808 5.74546C4.30729 5.10437 5.17462 4.74288 6.07992 4.74023H8.74992C8.94883 4.74023 9.1396 4.81925 9.28025 4.9599C9.4209 5.10056 9.49992 5.29132 9.49992 5.49023C9.49992 5.68915 9.4209 5.87991 9.28025 6.02056C9.1396 6.16122 8.94883 6.24023 8.74992 6.24023H6.07992C5.57244 6.24288 5.08665 6.44633 4.72874 6.80611C4.37083 7.1659 4.16991 7.65275 4.16992 8.16023V17.0502C4.16595 17.304 4.21235 17.5561 4.30644 17.7919C4.40052 18.0277 4.54042 18.2424 4.71805 18.4238C4.89567 18.6051 5.10749 18.7494 5.34126 18.8484C5.57502 18.9473 5.82608 18.9989 6.07992 19.0002H14.9999C15.2521 19.0002 15.5017 18.9506 15.7347 18.8541C15.9676 18.7576 16.1793 18.6162 16.3576 18.4379C16.5359 18.2596 16.6773 18.0479 16.7738 17.815C16.8703 17.582 16.9199 17.3324 16.9199 17.0802V15.2702C16.9199 15.0713 16.9989 14.8806 17.1396 14.7399C17.2802 14.5993 17.471 14.5202 17.6699 14.5202C17.8688 14.5202 18.0596 14.5993 18.2003 14.7399C18.3409 14.8806 18.4199 15.0713 18.4199 15.2702V17.0502C18.4199 17.4994 18.3315 17.9441 18.1596 18.359C17.9877 18.7739 17.7358 19.151 17.4182 19.4685C17.1006 19.7861 16.7236 20.038 16.3087 20.2099C15.8938 20.3818 15.449 20.4702 14.9999 20.4702Z"
                fill="black"
              />
              <path
                d="M17.6301 8.76993C17.4371 8.76765 17.2521 8.69196 17.1128 8.55823C16.9735 8.42451 16.8903 8.24276 16.8801 8.04993C16.8651 7.74752 16.7772 7.45322 16.624 7.19206C16.4708 6.9309 16.2568 6.71061 16.0001 6.54993C15.721 6.37181 15.4007 6.26849 15.0701 6.24993C14.9717 6.24665 14.8748 6.22399 14.785 6.18327C14.6953 6.14255 14.6145 6.08455 14.5471 6.01258C14.4798 5.94062 14.4273 5.85609 14.3927 5.76384C14.358 5.67159 14.3419 5.57342 14.3451 5.47493C14.3484 5.37644 14.3711 5.27956 14.4118 5.18982C14.4525 5.10008 14.5105 5.01924 14.5825 4.95192C14.6545 4.8846 14.739 4.83211 14.8312 4.79745C14.9235 4.76279 15.0217 4.74665 15.1201 4.74993C15.9728 4.78195 16.7821 5.13434 17.3863 5.73677C17.9906 6.3392 18.3455 7.14735 18.3801 7.99993C18.3842 8.09844 18.3687 8.19677 18.3347 8.28931C18.3007 8.38185 18.2487 8.46677 18.1819 8.53921C18.115 8.61166 18.0345 8.67021 17.945 8.71151C17.8554 8.75282 17.7587 8.77607 17.6601 8.77993L17.6301 8.76993Z"
                fill="black"
              />
              <path
                d="M13.0003 13.36H10.5303C10.3314 13.36 10.1406 13.281 9.99994 13.1403C9.85929 12.9997 9.78027 12.8089 9.78027 12.61V10.09C9.78045 9.89115 9.85958 9.70051 10.0003 9.56L15.0003 4.56C15.0692 4.48924 15.1516 4.433 15.2427 4.39461C15.3337 4.35621 15.4315 4.33643 15.5303 4.33643C15.6291 4.33643 15.7269 4.35621 15.8179 4.39461C15.9089 4.433 15.9913 4.48924 16.0603 4.56L16.9203 5.42C16.9949 5.49425 17.053 5.58337 17.0909 5.68158C17.1289 5.77978 17.1457 5.88487 17.1403 5.99C17.2453 5.98523 17.3502 6.00233 17.4484 6.04019C17.5465 6.07806 17.6357 6.13588 17.7103 6.21L18.5803 7.07C18.7207 7.21062 18.7996 7.40124 18.7996 7.6C18.7996 7.79875 18.7207 7.98937 18.5803 8.13L13.5803 13.13C13.5043 13.2057 13.4137 13.2651 13.3139 13.3047C13.2142 13.3442 13.1075 13.363 13.0003 13.36ZM11.2403 11.86H12.6903L17.0003 7.57L16.6603 7.24C16.5871 7.16468 16.5299 7.07538 16.4921 6.97743C16.4543 6.87949 16.4367 6.77492 16.4403 6.67C16.3351 6.67538 16.2301 6.65857 16.1319 6.62067C16.0337 6.58277 15.9445 6.52461 15.8703 6.45L15.5403 6.12L11.2803 10.4L11.2403 11.86Z"
                fill="black"
              />
              <path
                d="M18.0796 8.3201C17.8808 8.31993 17.6901 8.2408 17.5496 8.1001L16.6796 7.2401C16.6065 7.16479 16.5493 7.07548 16.5115 6.97754C16.4737 6.87959 16.456 6.77503 16.4596 6.6701C16.3545 6.67549 16.2494 6.65868 16.1512 6.62078C16.053 6.58287 15.9639 6.52472 15.8896 6.4501L14.9996 5.5901C14.8592 5.44948 14.7803 5.25885 14.7803 5.0601C14.7803 4.86135 14.8592 4.67073 14.9996 4.5301L17.5496 2.0001C17.6902 1.85965 17.8809 1.78076 18.0796 1.78076C18.2784 1.78076 18.469 1.85965 18.6096 2.0001L21.1096 4.5101C21.1804 4.57905 21.2366 4.66146 21.275 4.75249C21.3134 4.84352 21.3332 4.94131 21.3332 5.0401C21.3332 5.1389 21.3134 5.23669 21.275 5.32771C21.2366 5.41874 21.1804 5.50116 21.1096 5.5701L18.6096 8.1001C18.4691 8.2408 18.2785 8.31993 18.0796 8.3201ZM17.2096 6.0001C17.3084 5.99787 17.4066 6.01629 17.4978 6.05417C17.5891 6.09205 17.6714 6.14857 17.7396 6.2201L18.0796 6.5501L19.5196 5.1001L18.0796 3.6101L16.6196 5.0601L16.9496 5.3901C17.0242 5.46435 17.0824 5.55348 17.1203 5.65168C17.1582 5.74989 17.175 5.85497 17.1696 5.9601L17.2096 6.0001Z"
                fill="black"
              />
            </svg>
            오늘은 어떤 실천을 하셨나요?
          </p>
        </Link>
      </Write>
      {cardList.map(({ nickname, bio, tag, message, like }, index) => (
        <Record key={index} nickname={nickname} bio={bio} tag={tag} message={message} like={like} />
      ))}

      <Footer>
        all rights reserved team ~~~ <br />
        icons from Flaticon
      </Footer>
    </>
  );
};

const H1 = styled.h1`
  padding-left: 40px;
  margin-top: 40px;
  color: ${(props) => props.theme.color.primaryColor};
  width: 100%;
  font-size: 1.3rem;
  font-weight: 700;
`;

const Write = styled.div`
  border: solid 1px #83838365;
  border-left: solid 2px ${(props) => props.theme.color.primaryColor};

  width: 90%;

  margin-top: 20px;
  font-size: 0.8rem;

  a {
    text-decoration: none;
    color: #000;
  }
  p {
    margin-left: 20px;
    display: flex;
    height: 40px;
    align-items: center;
  }
`;

const Footer = styled.footer`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b7b7b7;
  font-size: 0.8rem;
`;

export default Main;
