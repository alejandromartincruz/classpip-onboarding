import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

	mode = 'indeterminate';

  	public loading: Boolean;

	constructor(public loadingService: LoadingService) { }

	ngOnInit() {
		this.loadingService.getLoading().subscribe(
    		((enable: Boolean) => {
        		this.loading = enable;
      		})
    	);
	}

}
