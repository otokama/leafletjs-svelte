const fixEditCircleClass = () => {
  if (!L) return;
  L.Edit?.Circle.include({
    _resize: function (latlng) {
      var moveLatLng = this._moveMarker.getLatLng();
      var radius;
      // Calculate the radius based on the version
      if (L.GeometryUtil.isVersion07x()) {
        radius = moveLatLng.distanceTo(latlng);
      } else {
        radius = this._map.distance(moveLatLng, latlng);
      }
      this._shape.setRadius(radius);

      if (this._map.editTooltip) {
        this._map._editTooltip.updateContent({
          text:
            L.drawLocal.edit.handlers.edit.tooltip.subtext +
            '<br />' +
            L.drawLocal.edit.handlers.edit.tooltip.text,
          subtext:
            L.drawLocal.draw.handlers.circle.radius +
            ': ' +
            L.GeometryUtil.readableDistance(
              radius,
              true,
              this.options.feet,
              this.options.nautic
            )
        });
      }

      this._shape.setRadius(radius);

      this._map.fire(L.Draw.Event.EDITRESIZE, { layer: this._shape });
    }
  });
}

export default fixEditCircleClass;