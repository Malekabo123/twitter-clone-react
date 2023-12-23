import Trend from "./Trend/Trend";
import styles from "./Widget.module.css";
import SearchIcon from "@mui/icons-material/Search";

function Widget() {
  const trends = [
    { trendTitle: "#deprem", where: "Trending in Turkey", posts: "112k" },
    { trendTitle: "SONDAKİKA", where: "News", posts: "34.8K" },
    {
      trendTitle: "#BeyazKod1111",
      where: "Trending in Turkey",
      posts: "4,624",
    },
    { trendTitle: "#bursa", where: "Destinations", posts: "15.4K" },
    {
      trendTitle: "#GazzedeKatliamVar",
      where: "Trending in Turkey",
      posts: "31.3K",
    },
    { trendTitle: "Pendik", where: "Sports", posts: "48.5K" },
    { trendTitle: "#ecemerkek", where: "Entertainment", posts: "17K" },
    { trendTitle: "Loli", where: "Trending in Turkey", posts: "26.3K" },
    { trendTitle: "tinder", where: "Entertainment industry", posts: "13.6K" },
    { trendTitle: "GTA 6", where: "Video games", posts: "465K" },
  ];
  return (
    <div className={styles.widgets}>
      <div className={styles.search}>
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className={styles.trends}>
        <h3>Trends for you</h3>
        {trends.map((trend, index) => {
          return (
            <Trend
              key={index}
              where={trend.where}
              title={trend.trendTitle}
              posts={trend.posts}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Widget;
