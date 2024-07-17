import Block from "./Block";
import Wrapper from "./Wrapper";

const blockItems = [
    {
        label: 1,
        padding: '1rem',
        backgroundColor: 'red'
    },
    {
        label: 2,
        padding: '3rem',
        backgroundColor: 'green'
    },
    {
        label: 3,
        padding: '2rem',
        backgroundColor: 'blue'
    }
];

function Blocks() {
    return (
        <Wrapper>
            {
                blockItems.map((item) => {
                    return (
                        <Block padding={item.padding}
                            bg={item.backgroundColor}>
                            {item.label}
                        </Block>
                    )
                })
            }
        </Wrapper>
    );
}

export default Blocks;