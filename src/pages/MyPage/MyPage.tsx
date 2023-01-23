import PageTitle from '../../components/PageTitle';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import useLogin from '../../Hooks/useLogin';

import { recoilMyProfileState } from '../../state/recoilLoginState';
import { useRecoilState } from 'recoil';

import React, { useState, useEffect } from 'react';

import showToastMessage from '../../components/Common/ShowToast';

import Modal from '../../components/Common/Modal';
import Input from '../../components/Form/Input';
import axios from '../../config/Axios';

import { Platform } from '../../typing/common';

const MyPage = () => {
  const { logout } = useLogin();
  const [myProfile] = useRecoilState(recoilMyProfileState);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [confirmText, setConfirmText] = useState<string>('');

  const copyProfile = async () => {
    const { userId } = myProfile;

    try {
      const link = `${window.location.origin}/friend/${userId}`;
      await navigator.clipboard.writeText(link);
      showToastMessage('클립보드에 복사되었습니다');
    } catch (err: unknown) {
      console.error(err);
    }
  };

  const deleteUser = async () => {
    const platformKey: Platform = Number(window.localStorage.getItem('aPlatform')) as Platform;
    const platformName = Platform[platformKey].toLowerCase();

    if (myProfile?.userNickname === confirmText) {
      axios.delete('/api/user', {
        params: {
          platform: platformName,
        },
      });
      showToastMessage('탈퇴되었습니다.');
    } else {
      showToastMessage('현재 이름과 동일하게 입력하세요.');
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setConfirmText(value);
  };

  useEffect(() => {
    if (isShow) {
      setConfirmText('');
    }
  }, [isShow]);

  return (
    <>
      <PageTitle title="마이 페이지" prevButton={true} buttonPath="/" />
      <StyledUl>
        <li>
          <Link to="/mypage/edit">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 13.75C10.8628 13.75 9.75106 13.4128 8.80547 12.781C7.85989 12.1491 7.1229 11.2511 6.6877 10.2004C6.25249 9.14976 6.13862 7.99362 6.36049 6.87823C6.58235 5.76284 7.12999 4.73829 7.93414 3.93414C8.73829 3.12999 9.76284 2.58235 10.8782 2.36049C11.9936 2.13862 13.1498 2.25249 14.2004 2.6877C15.2511 3.1229 16.1491 3.85989 16.781 4.80547C17.4128 5.75106 17.75 6.86276 17.75 8C17.7474 9.52419 17.1407 10.9852 16.0629 12.0629C14.9852 13.1407 13.5242 13.7474 12 13.75ZM12 3.75C11.1594 3.75 10.3377 3.99926 9.63883 4.46626C8.93992 4.93325 8.39519 5.59701 8.07351 6.3736C7.75184 7.15018 7.66768 8.00472 7.83167 8.82914C7.99565 9.65356 8.40043 10.4108 8.9948 11.0052C9.58917 11.5996 10.3464 12.0044 11.1709 12.1683C11.9953 12.3323 12.8498 12.2482 13.6264 11.9265C14.403 11.6048 15.0668 11.0601 15.5337 10.3612C16.0007 9.66227 16.25 8.84057 16.25 8C16.2474 6.87364 15.7987 5.79417 15.0023 4.99772C14.2058 4.20126 13.1264 3.75264 12 3.75Z"
                fill="#333333"
              />
              <path
                d="M21 21.75C20.8019 21.7474 20.6126 21.6676 20.4725 21.5275C20.3324 21.3874 20.2526 21.1981 20.25 21C20.2474 19.078 19.4827 17.2355 18.1236 15.8764C16.7645 14.5173 14.922 13.7526 13 13.75H11C9.07799 13.7526 7.23546 14.5173 5.8764 15.8764C4.51733 17.2355 3.75265 19.078 3.75 21C3.75 21.1989 3.67098 21.3897 3.53033 21.5303C3.38968 21.671 3.19891 21.75 3 21.75C2.80109 21.75 2.61032 21.671 2.46967 21.5303C2.32902 21.3897 2.25 21.1989 2.25 21C2.25265 18.6802 3.17537 16.4561 4.81574 14.8157C6.45611 13.1754 8.68017 12.2526 11 12.25H13C15.3198 12.2526 17.5439 13.1754 19.1843 14.8157C20.8246 16.4561 21.7474 18.6802 21.75 21C21.7474 21.1981 21.6676 21.3874 21.5275 21.5275C21.3874 21.6676 21.1981 21.7474 21 21.75Z"
                fill="#333333"
              />
            </svg>
            프로필 설정
          </Link>
        </li>
        <li>
          <Link to="/badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.9999 17.0002C10.4723 17.0002 9.00721 16.3933 7.927 15.3131C6.84679 14.2329 6.23994 12.7678 6.23994 11.2402V4.56016C6.22471 4.34376 6.22471 4.12656 6.23994 3.91016C6.26222 3.72549 6.35233 3.55569 6.49277 3.43373C6.63321 3.31176 6.81397 3.24634 6.99994 3.25016H16.9999C17.1831 3.24909 17.3601 3.31597 17.4968 3.43789C17.6335 3.5598 17.7201 3.72807 17.7399 3.91016C17.7552 4.12656 17.7552 4.34376 17.7399 4.56016V11.2402C17.7399 12.7643 17.1358 14.2264 16.0599 15.306C14.9841 16.3857 13.5241 16.9949 11.9999 17.0002ZM7.73994 4.75016V11.2402C7.73994 12.37 8.18876 13.4535 8.98766 14.2524C9.78657 15.0513 10.8701 15.5002 11.9999 15.5002C13.1298 15.5002 14.2133 15.0513 15.0122 14.2524C15.8111 13.4535 16.2599 12.37 16.2599 11.2402V4.75016H7.73994Z"
                fill="#333333"
              />
              <path
                d="M16.9992 12.7103C16.8999 12.7171 16.8002 12.704 16.706 12.6718C16.6117 12.6397 16.5249 12.5891 16.4504 12.523C16.3759 12.4569 16.3154 12.3766 16.2723 12.2869C16.2291 12.1972 16.2043 12.0997 16.1992 12.0003C16.1992 11.8022 16.2765 11.6118 16.4147 11.4699C16.5529 11.3279 16.7411 11.2455 16.9392 11.2403C19.3092 11.2403 19.9392 8.64031 20.0492 7.32031H16.9992C16.8003 7.32031 16.6095 7.24129 16.4689 7.10064C16.3282 6.95999 16.2492 6.76922 16.2492 6.57031C16.2492 6.3714 16.3282 6.18063 16.4689 6.03998C16.6095 5.89933 16.8003 5.82031 16.9992 5.82031H20.8392C21.0373 5.8229 21.2266 5.90275 21.3667 6.04285C21.5068 6.18294 21.5866 6.37221 21.5892 6.57031C21.5892 8.69031 20.5892 12.7003 16.9392 12.7403L16.9992 12.7103Z"
                fill="#333333"
              />
              <path
                d="M7.06016 12.71C3.38016 12.71 2.41016 8.71004 2.41016 6.54004C2.41016 6.34113 2.48917 6.15036 2.62983 6.00971C2.77048 5.86906 2.96124 5.79004 3.16016 5.79004H7.00016C7.19907 5.79004 7.38983 5.86906 7.53049 6.00971C7.67114 6.15036 7.75016 6.34113 7.75016 6.54004C7.75016 6.73895 7.67114 6.92972 7.53049 7.07037C7.38983 7.21102 7.19907 7.29004 7.00016 7.29004H4.00016C4.15016 8.61004 4.74016 11.2 7.11016 11.21C7.20865 11.21 7.30617 11.2294 7.39717 11.2671C7.48816 11.3048 7.57084 11.3601 7.64049 11.4297C7.71013 11.4994 7.76538 11.582 7.80307 11.673C7.84076 11.764 7.86016 11.8615 7.86016 11.96C7.86016 12.0585 7.84076 12.1561 7.80307 12.2471C7.76538 12.338 7.71013 12.4207 7.64049 12.4904C7.57084 12.56 7.48816 12.6153 7.39717 12.6529C7.30617 12.6906 7.20865 12.71 7.11016 12.71H7.06016Z"
                fill="#333333"
              />
              <path
                d="M12 20.75C11.8019 20.7474 11.6126 20.6676 11.4725 20.5275C11.3324 20.3874 11.2526 20.1981 11.25 20V16.25C11.25 16.0511 11.329 15.8603 11.4697 15.7197C11.6103 15.579 11.8011 15.5 12 15.5C12.1989 15.5 12.3897 15.579 12.5303 15.7197C12.671 15.8603 12.75 16.0511 12.75 16.25V20C12.7474 20.1981 12.6676 20.3874 12.5275 20.5275C12.3874 20.6676 12.1981 20.7474 12 20.75Z"
                fill="#333333"
              />
            </svg>
            획득 뱃지
          </Link>
        </li>
        <li onClick={() => copyProfile()} style={{ cursor: 'pointer' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.16 15.9098C4.38668 15.9098 3.63072 15.6805 2.98772 15.2509C2.34473 14.8213 1.84357 14.2106 1.54763 13.4961C1.25169 12.7817 1.17426 11.9955 1.32513 11.237C1.476 10.4786 1.84839 9.78188 2.39521 9.23506C2.94204 8.68823 3.63873 8.31584 4.3972 8.16497C5.15566 8.01411 5.94184 8.09154 6.65629 8.38748C7.37075 8.68342 7.98141 9.18457 8.41105 9.82757C8.84068 10.4706 9.07 11.2265 9.07 11.9998C9.06736 13.036 8.65457 14.029 7.92187 14.7617C7.18918 15.4944 6.19619 15.9072 5.16 15.9098ZM5.16 9.58985C4.68335 9.58985 4.2174 9.73119 3.82108 9.996C3.42476 10.2608 3.11586 10.6372 2.93345 11.0776C2.75104 11.5179 2.70332 12.0025 2.79631 12.47C2.8893 12.9375 3.11883 13.3669 3.45587 13.704C3.79292 14.041 4.22234 14.2705 4.68983 14.3635C5.15733 14.4565 5.6419 14.4088 6.08227 14.2264C6.52264 14.044 6.89903 13.7351 7.16384 13.3388C7.42866 12.9424 7.57 12.4765 7.57 11.9998C7.57 11.3607 7.31609 10.7477 6.86413 10.2957C6.41217 9.84376 5.79917 9.58985 5.16 9.58985Z"
              fill="#333333"
            />
            <path
              d="M18.8397 9.59002C18.0664 9.59002 17.3104 9.3607 16.6674 8.93107C16.0244 8.50143 15.5233 7.89077 15.2273 7.17631C14.9314 6.46185 14.854 5.67568 15.0048 4.91722C15.1557 4.15875 15.5281 3.46206 16.0749 2.91523C16.6217 2.36841 17.3184 1.99602 18.0769 1.84515C18.8354 1.69428 19.6215 1.77171 20.336 2.06765C21.0504 2.36359 21.6611 2.86475 22.0907 3.50774C22.5204 4.15074 22.7497 4.9067 22.7497 5.68002C22.747 6.71621 22.3343 7.7092 21.6016 8.44189C20.8689 9.17459 19.8759 9.58738 18.8397 9.59002ZM18.8397 3.28002C18.3626 3.28003 17.8963 3.42163 17.4997 3.68688C17.1032 3.95214 16.7943 4.32913 16.6122 4.77008C16.4301 5.21103 16.383 5.69611 16.4768 6.16388C16.5706 6.63164 16.8011 7.06104 17.1391 7.39769C17.4772 7.73433 17.9075 7.96307 18.3757 8.05493C18.8438 8.14678 19.3287 8.09763 19.7689 7.91369C20.2091 7.72975 20.5848 7.4193 20.8484 7.02166C21.112 6.62402 21.2517 6.15709 21.2497 5.68002C21.247 5.04258 20.992 4.43216 20.5403 3.98235C20.0886 3.53255 19.4771 3.28002 18.8397 3.28002Z"
              fill="#333333"
            />
            <path
              d="M18.8397 22.2199C18.0659 22.2199 17.3096 21.9903 16.6664 21.5602C16.0232 21.1302 15.522 20.5189 15.2264 19.8039C14.9307 19.0888 14.8539 18.3022 15.0056 17.5434C15.1572 16.7847 15.5306 16.088 16.0784 15.5416C16.6263 14.9952 17.3239 14.6236 18.083 14.4738C18.8421 14.3241 19.6286 14.4029 20.3429 14.7004C21.0572 14.9979 21.6672 15.5006 22.0956 16.1449C22.524 16.7892 22.7517 17.5462 22.7497 18.3199C22.747 19.3552 22.3339 20.3471 21.6009 21.0782C20.868 21.8093 19.8749 22.2199 18.8397 22.2199ZM18.8397 15.9099C18.363 15.9099 17.8971 16.0512 17.5008 16.3161C17.1044 16.5809 16.7955 16.9573 16.6131 17.3976C16.4307 17.838 16.383 18.3226 16.476 18.7901C16.569 19.2576 16.7985 19.687 17.1355 20.024C17.4726 20.3611 17.902 20.5906 18.3695 20.6836C18.837 20.7766 19.3216 20.7289 19.7619 20.5465C20.2023 20.364 20.5787 20.0552 20.8435 19.6588C21.1083 19.2625 21.2497 18.7966 21.2497 18.3199C21.2497 17.6807 20.9958 17.0677 20.5438 16.6158C20.0918 16.1638 19.4788 15.9099 18.8397 15.9099Z"
              fill="#333333"
            />
            <path
              d="M16.2304 17.2803C16.1018 17.279 15.9752 17.2482 15.8604 17.1903L7.94037 12.6502C7.82652 12.5845 7.73223 12.4897 7.6672 12.3754C7.60218 12.2612 7.56875 12.1317 7.57037 12.0002C7.57277 11.866 7.61115 11.7349 7.68151 11.6206C7.75186 11.5062 7.85162 11.4129 7.97037 11.3502L16.1504 7.14025C16.3281 7.04875 16.5348 7.03159 16.7252 7.09254C16.9155 7.15349 17.0739 7.28755 17.1654 7.46525C17.2569 7.64294 17.274 7.84971 17.2131 8.04006C17.1521 8.23041 17.0181 8.38875 16.8404 8.48025L9.89037 12.0002L16.6104 15.8403C16.754 15.9229 16.8662 16.0508 16.9294 16.2039C16.9927 16.3571 17.0035 16.5268 16.9601 16.6867C16.9166 16.8466 16.8215 16.9877 16.6895 17.0878C16.5575 17.1879 16.3961 17.2415 16.2304 17.2402V17.2803Z"
              fill="#333333"
            />
          </svg>
          친구에게 공유
        </li>
        <li>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.37171 7C4.37433 6.00797 4.76889 5.05718 5.46942 4.35478C6.16996 3.65237 7.11969 3.25527 8.11171 3.25L10.6117 3.25C10.8115 3.24998 11.0034 3.32868 11.1456 3.46905C11.2878 3.60942 11.3691 3.80017 11.3717 4C11.3691 4.19811 11.2893 4.38737 11.1492 4.52747C11.0091 4.66756 10.8198 4.74741 10.6217 4.75L8.12171 4.75C7.52659 4.75522 6.95732 4.99395 6.53649 5.41478C6.11566 5.83561 5.87693 6.40488 5.87171 7L5.87171 17C5.8717 17.295 5.92997 17.5871 6.04317 17.8595C6.15636 18.132 6.32225 18.3793 6.53132 18.5875C6.74038 18.7956 6.9885 18.9604 7.26142 19.0724C7.53435 19.1843 7.8267 19.2413 8.12171 19.24H10.6217C10.7239 19.2344 10.8261 19.2501 10.922 19.2861C11.0178 19.322 11.1051 19.3775 11.1784 19.4489C11.2517 19.5203 11.3094 19.6062 11.3479 19.701C11.3863 19.7959 11.4046 19.8977 11.4017 20C11.4059 20.0988 11.3896 20.1973 11.3541 20.2895C11.3185 20.3817 11.2643 20.4656 11.1949 20.536C11.1254 20.6063 11.0423 20.6617 10.9506 20.6985C10.8588 20.7353 10.7605 20.7528 10.6617 20.75H8.16171C7.66804 20.7526 7.17873 20.6575 6.72201 20.4701C6.26529 20.2827 5.85018 20.0068 5.50064 19.6582C5.15109 19.3095 4.87402 18.8952 4.68541 18.4389C4.4968 17.9827 4.40038 17.4937 4.40171 17L4.40171 7H4.37171Z"
              fill="#333333"
            />
            <path
              d="M7.88079 12.0001C7.88338 11.802 7.96323 11.6127 8.10332 11.4726C8.24342 11.3325 8.43268 11.2527 8.63079 11.2501L17.6308 11.2501C17.7297 11.2487 17.8278 11.2672 17.9194 11.3044C18.011 11.3416 18.0942 11.3968 18.1641 11.4667C18.234 11.5367 18.2892 11.6199 18.3264 11.7115C18.3637 11.8031 18.3821 11.9012 18.3808 12.0001C18.3808 12.1973 18.3032 12.3865 18.1647 12.5269C18.0262 12.6673 17.838 12.7474 17.6408 12.7501L8.64079 12.7501C8.44095 12.7501 8.24914 12.6714 8.10689 12.531C7.96465 12.3906 7.88342 12.1999 7.88079 12.0001Z"
              fill="#333333"
            />
            <path
              d="M13.8707 7.74C13.8753 7.59381 13.922 7.45206 14.0052 7.33175C14.0884 7.21143 14.2045 7.11767 14.3396 7.06172C14.4747 7.00577 14.6232 6.98999 14.767 7.0163C14.9109 7.0426 15.0441 7.10986 15.1507 7.21L19.4107 11.44C19.5494 11.5836 19.627 11.7754 19.627 11.975C19.627 12.1746 19.5494 12.3664 19.4107 12.51L15.1807 16.76C15.0401 16.9005 14.8495 16.9793 14.6507 16.9793C14.452 16.9793 14.2614 16.9005 14.1207 16.76C13.9803 16.6194 13.9014 16.4288 13.9014 16.23C13.9014 16.0313 13.9803 15.8406 14.1207 15.7L17.8207 12L14.1007 8.28C14.0285 8.20974 13.971 8.12581 13.9315 8.0331C13.892 7.9404 13.8714 7.84077 13.8707 7.74Z"
              fill="#333333"
            />
          </svg>
          <span className="logout" onClick={() => logout()}>
            로그아웃
          </span>
        </li>
        <li onClick={() => setIsShow(true)} className="red">
          계정 탈퇴
        </li>
        <Modal title={'계정 탈퇴'} isShow={isShow} setIsShow={setIsShow} buttonLabel="탈퇴하기" callback={deleteUser}>
          <>
            <div>탈퇴하시려면 계정 이름을 입력해주세요.</div>
            <Input name="nickname" placeholder={myProfile.userNickname} onChange={onInputChange} />
          </>
        </Modal>
      </StyledUl>
    </>
  );
};

const StyledUl = styled.ul`
  width: 100%;
  padding: 20px;
  position: relative;
  a:visited,
  a {
    color: #000;
    text-decoration: none;
  }
  li {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-weight: 500;

    svg {
      margin-right: 20px;
    }

    span.logout {
      cursor: pointer;
    }
  }

  & .red {
    color: #ff4646;
    margin-top: 50px;
    cursor: pointer;
  }
`;
export default MyPage;
