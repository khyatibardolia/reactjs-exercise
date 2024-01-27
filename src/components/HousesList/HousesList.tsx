import {FC} from "react";
import {Card} from "../common/Card/Card";
import {Houses} from "../../hooks/types";
import styles from './HousesList.module.scss';

export type Props = {
    houses: Houses[];
}

export const HousesList: FC = ({houses}: Props) => {

    const getHouseClassName = (houseColor: string) => {
        switch (houseColor.toLowerCase()) {
            case 'scarlet and gold1':
                return styles['scarlet_and_gold'];
            case 'blue and bronze':
                return styles.blue_and_bronze;
            case 'yellow and black':
                return styles.yellow_and_black;
            case 'green and silver':
                return styles.green_and_silver;
            default:
                return styles.default;
        }
    };

    return <div className={styles['house_list_wrapper']}>
        {houses && houses.length && houses.map((house: Houses) => {
            return <Card
                key={house.id}
                header={
                    <div className={styles['house_list_wrapper__header']}>
                        <span>{house.name}</span>
                        <span>{house.animal}</span>
                    </div>
                }
                content={
                    <div className={styles['house_list_wrapper__content']}>
                        <div className={`${styles['house_list_wrapper__content__house-color']} 
                                 ${getHouseClassName(house.houseColours)}`}/>
                        <div className={styles['house_list_wrapper__content__founder']}>
                            <span>Founder: </span>
                            <span>{house.founder}</span>
                        </div>
                    </div>
                }/>
        })}
    </div>
}