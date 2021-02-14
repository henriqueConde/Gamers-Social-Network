import React from 'react';
import styles from './UserStatsGraphs.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    console.log(data);
    if (data.length) {
      const graphData = data.map((item) => {
        return {
          x: item.title,
          y: Number(item.access_count),
        };
      });

      setTotal(
        data.map(({ access_count }) => Number(access_count)).reduce((a, b) => a + b),
      );
      setGraph(graphData);
    } 
  }, [data]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Views: {total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 16,
              fill: '#C5CBD9',
            },
          }}
        />
      </div>
    </section>
  );
};

export default UserStatsGraphs;
