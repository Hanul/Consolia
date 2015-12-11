Consolia.MAIN = METHOD({

	run : function() {
		'use strict';
		
		DIV({
			style : {
				padding : 10
			},
			c : 'Consolia는 웹 브라우저의 콘솔 메시지 기반 온라인 MUD 게임입니다.\nF12를 눌러 개발자 도구를 여신 후, Console 창을 확인해주시기 바랍니다.'
		}).appendTo(BODY);
		
		출력('안녕하세요, ', Consolia.STYLES.logo, 'Consolia', '에 오신것을 환영합니다!');
		
		출력(Consolia.STYLES.logo, 'Consolia', '는 ', {
			fontWeight : 'bold',
			fontStyle : 'italic'
		}, '콘솔 메시지 기반 온라인 MUD 게임', '입니다.');
		출력(1, '1. 로그인 하시려면 ', Consolia.STYLES.order, '로그인(\'아이디\', \'비밀번호\')', '를 입력하세요.');
		출력(1, '2. 회원가입 하시려면 ', Consolia.STYLES.order, '회원가입(\'아이디\', \'비밀번호\')', '를 입력해주시기 바랍니다.');
	}
});
