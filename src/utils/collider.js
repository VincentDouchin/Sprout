const left = (mesh, divide = 1) => mesh.position.x - mesh.geometry.parameters.width / 2 / divide
const right = (mesh, divide = 1) => mesh.position.x + mesh.geometry.parameters.width / 2 / divide
const top = (mesh, divide = 1) => mesh.position.y - mesh.geometry.parameters.height / 2 / divide
const bottom = (mesh, divide = 1) => mesh.position.y + mesh.geometry.parameters.height / 2 / divide
const halfHeight = (mesh, ratio) => mesh.geometry.parameters.height / 2 / ratio
const halfWidth = (mesh, ratio) => mesh.geometry.parameters.width / 2 / ratio

function isColliding(r1, ratio1 = 1, r2, ratio2 = 1) {
	if (
		left(r1, ratio1) > right(r2, ratio2) ||
		top(r1, ratio1) > bottom(r2, ratio2) ||
		right(r1, ratio1) < left(r2, ratio2) ||
		bottom(r1, ratio1) < top(r2, ratio2)
	) return false

	return true
}
const collide = {
	top: (r1, ratio1, r2, ratio2) => bottom(r1, ratio1) > top(r2, ratio2) && top(r1, ratio1) < top(r2, ratio2) && r2.position.x > left(r1, ratio1) && r2.position.x < right(r1, ratio1),
	bottom: (r1, ratio1, r2, ratio2) => top(r1, ratio1) < bottom(r2, ratio2) && bottom(r1, ratio1) > bottom(r2, ratio2) && r2.position.x > left(r1, ratio1) && r2.position.x < right(r1, ratio1),
	left: (r1, ratio1, r2, ratio2) => left(r1, ratio1) < right(r2, ratio2) && right(r1, ratio1) > right(r2, ratio2) && r2.position.y > top(r1, ratio1) && r2.position.y < bottom(r1, ratio1),
	right: (r1, ratio1, r2, ratio2) => right(r1, ratio1) > left(r2, ratio2) && left(r1, ratio1) < left(r2, ratio2) && r2.position.y > top(r1, ratio1) && r2.position.y < bottom(r1, ratio1),
}

function collideRect(r1, ratio1 = 1, r2, ratio2 = 1, velocity) {

	if (collide.top(r1, ratio1, r2, ratio2) && r2.userData?.collideBottom) {
		r1.position.y = r2.position.y - halfHeight(r2, ratio2) - halfHeight(r1, ratio1)
		velocity.y = 0
		return true
	}
	if (collide.bottom(r1, ratio1, r2, ratio2) && r2.userData?.collideTop) {
		r1.position.y = r2.position.y - halfHeight(r2, ratio2) - halfHeight(r1, ratio1)
		velocity.y = 0
		return true
	}
	if (collide.left(r1, ratio1, r2, ratio2) && r2.userData?.collideRight) {
		r1.position.x = r2.position.x + halfWidth(r2, ratio2) + halfWidth(r1, ratio1)
		velocity.x = 0
		return true

	}
	if (collide.right(r1, ratio1, r2, ratio2) && r2.userData?.collideLeft) {
		r1.position.x = r2.position.x - halfWidth(r2, ratio2) - halfWidth(r1, ratio1)
		velocity.x = 0
		return true
	}

	return false
}
export { isColliding, collideRect }