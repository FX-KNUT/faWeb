import { useEffect } from "react";
import { store } from "./App.tsx";
const { kakao } = window;

const Location = () => {
  /**
   * const [center, setCenter] = useState();
   */

  const center = [36.96911947843944, 127.8696547175743];

  let lat = center[0];
  let lon = center[1];

  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(lat, lon),
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);

    let markerPosition = new kakao.maps.LatLng(lat, lon);
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, []);

  store.dispatch({ type: { loc: "location" } });
  // Google Map API는 유료이지만, Kakao API를 사용하면 무료입니다.
  // 동시에 아주 간단하게 구현할 수 있습니다.
  // 백엔드 단에서 로직을 구현하여 정보를 받아올지,
  // 프론트엔드 단에서 로직을 구현하여 직접 띄울지 회의해보세요.
  // 백엔드 단의 사람이 더 많다면 백엔드 쪽에서 위도와 경도를 얻어서
  // 전달하고 프론트엔드 단에서 위도와 경도를 기반으로 위치를 보여주는 것도
  // 분명히 비효율적인 방법이지만 엄연히 데이터 통신을 하는 것이므로
  // 그 과정속에 REST API 통신, 외부 API 사용을 통한 CORS 등의 이해를
  // 얻게 될 겁니다.
  return (
    <div className="main-location-wrapper">
      <div className="main-location-content">
        <div id="map" className="main-location-map"></div>
      </div>
    </div>
  );
};
export default Location;
