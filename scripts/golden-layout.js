const configInspector = {
    content: [{
        type: 'row',
        content:[{
            type: 'component',
            componentName: 'Inspector',
            componentState: { label: 'A' },
            isClosable: false
        }]
    }]
};
const inspectorLayout = new GoldenLayout( configInspector, $("#ws-inspector") );
inspectorLayout.registerComponent( 'Inspector', function( container, componentState ){
    container.getElement().html( '<h2>IDE</h2>' );
});
inspectorLayout.init();
inspectorLayout.on( 'stackCreated', function( stack ){
    stack.header.controlsContainer.remove()
});