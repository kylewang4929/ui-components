var AirDashboard = require("./../../../lib/Dashboard").AirDashboard;

var React = require("react");
var TestUtils = require('react-dom/lib/ReactTestUtils');
describe("components - AirDashboard - ", function() {
	it("value is the right", function() {
		var airDashboard = TestUtils.renderIntoDocument(
			<AirDashboard value={12}/>
		);
		var dom = TestUtils.findRenderedDOMComponentWithClass(airDashboard, "value-text");
		expect(dom.innerHTML === "12").toBe(true);
	});
});