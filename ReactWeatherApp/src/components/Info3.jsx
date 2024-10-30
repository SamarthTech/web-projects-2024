export default function Info3({info}) {
  return (
    <>
      <div className="box3">
        <div className="Box3Desc">
          <h1 className="weatherhead">Weather Description</h1>
            <p className="weatherdesc">
              The Weather can be described as {info.description} and it feels like {info.feels_like}&deg;C
            </p>
        </div>
      </div>
    </>
  );
}