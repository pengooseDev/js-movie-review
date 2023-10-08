# Component 요구사항

Component는 state가 변하면 변경된 state를 기반으로 다시 렌더링을 한다.

## Component 생성

- [ ] Component가 렌더링 될 parentNode를 주입받는다.
- [ ] 초기 state를 optional하게 주입받는다.
- [ ] 외부에서 state를 바꿀 수 있는 stateSetter를 추상화한다.
- [ ] state가 변하면 다시 렌더링한다.
- [ ] Component를 상속받은 서브 클래스에서 원하는 컴포넌트를 템플릿을 추상화 할 수 있다.
- [ ] 서브 클래스에서 원하는 이벤트를 바인딩할 수 있다.
