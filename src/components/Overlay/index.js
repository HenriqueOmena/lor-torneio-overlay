import React from 'react';

import {Overlay as OverlayDiv} from './style';
import Jogador from '../Jogador';
import Informe from '../Informe';

const Overlay = ({mostrarWebcam, nomeTorneio, faseTorneio, jogador1, jogador2, atuais, bans, vitorias}) => {
	return (
		<OverlayDiv>
			<Jogador webcam={mostrarWebcam} jogador={jogador1} atuais={atuais[0]} bans={bans[0]} vitorias={vitorias[0]}/>
			<Informe nome={nomeTorneio} fase={faseTorneio}/>
			<Jogador webcam={mostrarWebcam} jogador={jogador2} atuais={atuais[1]} bans={bans[1]} vitorias={vitorias[1]}/>
		</OverlayDiv>
	)
}

export default Overlay;
