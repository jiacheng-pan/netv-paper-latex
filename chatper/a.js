
// Label

const labelManager = new Label(netv)
labelManager.draw(netv.nodes(), (node) => Label.template.rightText(node.id()))

// Interaction

netv.on('pan', () => {
	labelManager.updatePosition(netv.nodes())
})
netv.on('zoom', () => {
	labelManager.updatePosition(netv.nodes())
})
netv.nodes().forEach((node) =>
	node.on('dragging', () => {
		labelManager.updatePosition(node)
	})
)

const lasso = new Lasso(netv, { enable: true })
lasso.onSelected((selectedItems) => {
	netv.nodes().forEach((node) => {
		node.r(8)
	})
	selectedItems.forEach((node) => {
		node.r(16)
	})
	netv.draw()
})

const layout = new layouts RandomLayout(netv)
layout.time(1000)
layout.onStart(()=>{})
layout.onTick(()=>{})
layout.onStop(()=>{})
layout.start()