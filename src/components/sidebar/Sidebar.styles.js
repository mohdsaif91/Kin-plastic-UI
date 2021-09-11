import styled from '@emotion/styled';

export const SidBarContainer = styled.div`
	width: ${(props) => (props.openSide ? '20%' : '5%')};
	max-width: 280px;
	min-width: 80px;
	background-image: linear-gradient(
			315deg,
			rgba(252, 82, 150, 0.8) 0%,
			rgba(246, 112, 98, 0.8) 74%
		),
		url(${(p) => p.backgroundImage});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	color: #fff;
	position: relative;
	transition: 0.2s ease-in all;
`;

export const SideBarHeader = styled.h3`
	padding: 20px 0;
	text-align: center;
	margin-bottom: 10px;
	letter-spacing: 6px;
	font-family: ${(props) => props.font};
`;

export const MenuItemContainer = styled.div``;

export const MenuItem = styled.div`
	${(p) =>
		!p.openSide &&
		`text-align:center;
         ${p.isSelected && 'background-color:#fff;'}
     `}
	padding: 8px 20px;
	font-weight: 600;
	color: ${(props) => (props.isSelected ? 'rgba(255,255,255)' : 'rgba(19, 15, 64)')};
	font-family: ${(props) => props.font};
	white-space: nowrap;

	&:hover {
		color: rgba(225, 225, 225);
		transition: 0.1s ease-in all;
	}

	&:after {
		content: '';
		border: 1px solid
			${(props) => (props.isSelected ? 'rgba(255,255,255)' : 'rgba(225, 112, 85)')};
		display: block;
		margin: 8px 0 4px;
	}

	${(props) =>
		!props.isSelected &&
		`
     &:hover{
        &:after{
            border:1px solid rgba(225,225,225,0.2);
            transition: 0.1s ease-in all;

        }
     }`}
`;

export const Text = styled.p`
	display: ${(p) => (p.openSide ? 'inline' : 'none')};
`;

export const Icon = styled.img`
	${(p) => p.openSide && `padding-right: 20px; transition: .5s ease-in padding-right;`}
	height: 16px;
	width: 16px;
`;

//Toggler------------------------------/

export const TogglerContainer = styled.div`
	position: absolute;
	width: 30%;
	bottom: 10%;
	left: 0%;
	right: 0%;
	margin: 0 auto;
`;

export const Toggler = styled.div`
	height: 40px;
	cursor: pointer;
	position: releative;

	&:after {
		content: '';
		position: absolute;
		left: 0;
		top: 0.25rem;
		width: 100%;
		height: 0.1rem;
		background: #fff;
		box-shadow: 0 0.75em 0 0 #fff, 0 1.5em 0 0;
	}
`;
