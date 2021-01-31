import ExerciseInfo from './ExerciseInfo';

function ExercisePart(props) {
    let {bodyParts, category} = props;
    return( 
        <>
            { bodyParts[`${category}`] !== undefined ? 
                bodyParts[`${category}`].map((item, index) =>
                {return(
                            <ExerciseInfo
                                key={index}
                                name={item.name}
                                equipment={item.equipment}
                                description={item.description}
                            />
                            )
                    }) : null
            }
        </>
    )

}
export default ExercisePart;