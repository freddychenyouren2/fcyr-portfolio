import'./index.scss';

const AnimatedLetters = ({ letterClass, stringArray, index}) => {
    return (
        //In line element: Use span
        <span>
            {
                stringArray.map((char, i) => (
                    <span key={char + i} className={ `${letterClass} _${i + index}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters