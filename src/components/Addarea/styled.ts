import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    border: 1px solid #555;
    padding: 10px;
    border-radius: 5px;
    margin:20px 0;
    align-items: center;

    .image{
        margin-right:10px;
        font-size: 30px;
        font-weight: bold;
        text-align: center;
    }

    input{
        border: none;
        background: transparent;
        outline: 0;
        color: #fff;
        font-size: 18px;
        flex:1;
    }
`;