import EquipmentInfo from './EquipmentInfo';

function EquipmentPart(props) {
    let {tools, equip} = props;
    return( 
        <>
            { tools[`${equip}`] !== undefined ? 
                tools[`${equip}`].map((item, index) =>
                {return(
                            <EquipmentInfo
                                key={index}
                                name={item.name}
                                category={item.category}
                                description={item.description}
                            />
                            )
                    }) : null
            }
        </>
    )

}
export default EquipmentPart;