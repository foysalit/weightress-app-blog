import {Model} from '@nozbe/watermelondb';
import {field, readonly, date} from '@nozbe/watermelondb/decorators';

export default class Weight extends Model {
  static table = 'weights';

  @field('note') note;
  @field('weight') weight;
  @readonly @date('created_at') createdAt;
}
