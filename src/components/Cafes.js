/*global kakao*/
import React, { useEffect, useState } from 'react';
import './Cafes.css';
import restaurantImg from '../img/restaurant.jpg';
import convenienceImg from '../img/convenience.jpg';
import canteenImg from '../img/canteen.jpg';
import breadImg from '../img/bread.jpg';
const Cafes = ({ cafeteria, myLat, myLon }) => {
  const [convenienceCnt, setConvenienceCnt] = useState(0);
  const [restaurantCnt, setRestaurantCnt] = useState(0);
  const [canteenCnt, setCanteenCnt] = useState(0);
  const [breadCnt, setBreadCnt] = useState(0);
  const makescript = () => {
    let convenience = 0,
      restaurant = 0,
      canteen = 0,
      bread = 0;
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(myLat, myLon),
      level: 5,
    };

    const map = new kakao.maps.Map(container, options);
    const myLocationMarker = new kakao.maps.Marker({
      map: map,
      position: options.center,
    });
    cafeteria.forEach((el) => {
      let marker;
      const overlay = new kakao.maps.CustomOverlay();

      const closeOverlay = () => {
        overlay.setMap(null);
      };
      const closeBtn = document.createElement('div');
      const content = document.createElement('div');
      const iwContent = '<div style="width:200px; text-align:center">' + el['가맹점명'] + '</div>';
      closeBtn.innerHTML = `<div class="close" onClick="${() => closeOverlay()}"title="닫기" id="close"/>`;

      content.innerHTML =
        `<div class="wrap">` +
        '    <div class="info">' +
        '        <div class="title">' +
        `            ${el['가맹점명']}` +
        closeBtn.innerHTML +
        '        </div>' +
        '        <div class="body">' +
        '            <div class="desc">' +
        `                <div class="ellipsis"> 주소 : ${el['소재지도로명주소']}</div>` +
        `                <div class="ellipsis"> 전화번호 : ${el['전화번호']}</div>` +
        `                <div class="ellipsis"> 평일운영시작시각 : ${el['평일운영시작시각']}</div>` +
        `                <div class="ellipsis"> 평일운영종료시각 : ${el['평일운영종료시각']}</div>` +
        `                <div class="ellipsis"> 토요일운영시작시각 : ${el['토요일운영시작시각']}</div>` +
        `                <div class="ellipsis"> 토요일운영종료시각 : ${el['토요일운영종료시각']}</div>` +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';
      // 편의점 프랜차이즈
      if (
        el['가맹점명'].indexOf('세븐일레븐') !== -1 ||
        el['가맹점명'].indexOf('미니스톱') !== -1 ||
        el['가맹점명'].indexOf('CU') !== -1 ||
        el['가맹점명'].indexOf('GS25') !== -1 ||
        el['가맹점명'].indexOf('이마트24') !== -1 ||
        el['가맹점명'].indexOf('cu') !== -1 ||
        el['가맹점명'].indexOf('씨유') !== -1 ||
        el['가맹점명'].indexOf('마트') !== -1
      ) {
        convenience++;
        let imageSrc = convenienceImg,
          imageSize = new kakao.maps.Size(30, 47);
        let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        marker = new kakao.maps.Marker({
          image: markerImage,
          map: map,
          position: new kakao.maps.LatLng(el['위도'], el['경도']),
          title: el['가맹점명'],
        });
        // 빵집 프랜차이즈
      } else if (
        el['가맹점명'].indexOf('파리바게뜨') !== -1 ||
        el['가맹점명'].indexOf('뚜레쥬르') !== -1 ||
        el['가맹점명'].indexOf('던킨도너츠') !== -1 ||
        el['가맹점명'].indexOf('홍루이젠') !== -1 ||
        el['가맹점명'].indexOf('앤티앤스') !== -1
      ) {
        bread++;
        let imageSrc = breadImg,
          imageSize = new kakao.maps.Size(46, 54);

        let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        marker = new kakao.maps.Marker({
          image: markerImage,
          map: map,
          position: new kakao.maps.LatLng(el['위도'], el['경도']),
          title: el['가맹점명'],
        });
        // 무료급식소
      } else if (el['가맹점유형코드'] === 4) {
        canteen++;
        let imageSrc = canteenImg,
          imageSize = new kakao.maps.Size(56, 62);
        let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        marker = new kakao.maps.Marker({
          image: markerImage,
          map: map,
          position: new kakao.maps.LatLng(el['위도'], el['경도']),
          title: el['가맹점명'],
        });
        // 나머지 (식당)
      } else {
        restaurant++;
        let imageSrc = restaurantImg,
          imageSize = new kakao.maps.Size(48, 54);
        let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
        marker = new kakao.maps.Marker({
          image: markerImage,
          map: map,
          position: new kakao.maps.LatLng(el['위도'], el['경도']),
          title: el['가맹점명'],
        });
      }
      let infowindow = new kakao.maps.InfoWindow({
        content: iwContent, // 인포윈도우에 표시할 내용
      });
      overlay.setContent(content);
      overlay.setPosition(marker.getPosition());
      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
      kakao.maps.event.addListener(marker, 'click', () => {
        overlay.setMap(map);
      });
      content.addEventListener('click', (e) => {
        e.preventDefault();
        closeOverlay();
      });
    });
    setConvenienceCnt(convenience);
    setRestaurantCnt(restaurant);
    setCanteenCnt(canteen);
    setBreadCnt(bread);
    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }
  };
  useEffect(() => {
    makescript();
  }, [cafeteria]);
  return (
    <>
      <div className='cafe__info'>주변 사용처</div>
      <div className='cafe__count'>
        <div className='cafe__conv'>편의점 : {convenienceCnt}개</div>
        <div className='cafe__conv'>빵집 : {breadCnt}개</div>
        <div className='cafe__conv'>식당 : {restaurantCnt}개</div>
        <div className='cafe__conv'>무료급식소 : {canteenCnt}개</div>
      </div>
      <div id='map' style={{ width: '80%', height: '70vh' }}></div>
    </>
  );
};

export default Cafes;
