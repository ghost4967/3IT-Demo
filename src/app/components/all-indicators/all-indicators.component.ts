import { isDefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { first } from 'rxjs/operators';

import { IndicatorsService } from '../../services/indicators.service';
import { Indicator } from '../../model/indicators/indicators.model';
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-all-indicators',
  templateUrl: './all-indicators.component.html',
  styleUrls: ['./all-indicators.component.css']
})
export class AllIndicatorsComponent implements OnInit {

  listIndicator;
  indicatorInfo = [];
  indicator;
  indicatorVersion;
  constructor(private indicatorsService: IndicatorsService) {
  }

  ngOnInit(): void {
    this.getIndicators();
  }

  view(event, item) {
    this.indicator = item;
    this.getIndicatorByType(item.code.toString())
  }

  getIndicators() {
    this.listIndicator = this.indicatorsService.getAllIndicators().pipe(map(x => {
      let indicators = new Array<Indicator>();
      Object.keys(x).forEach(element => {
        if (x[element].nombre) {
          indicators.push({
            name: x[element].nombre, date: (x[element].fecha),
            code: x[element].codigo, value: x[element].valor,
            unitOfMeasure: x[element].unidad_medida
          })
        }

      });
      return indicators;
    }));
  }

  getIndicatorByType(type) {
    this.indicatorsService.getIndicatorByType(type).then(res => {
      this.indicatorInfo = res['serie']
      this.indicatorVersion = {version : res['version'], author : res['autor']}
      return this.indicatorInfo
    })
  }

}
