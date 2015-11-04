# Angular2 Simple List Component

This module can be imported independently to test component imports. It contains a simple list component that lets you show a list of items.

To install this module use JSPM:
```bash
jspm install github:InfomediaLtd/angular2-simple-list
```

The list can be configured to show different contents and show a link.

Configuration example:

```
@Component({
    //...
    template: `
        <simple-list
            [list]="users"
            [content]="getName"
            [link]="getLink">
        </simple-list>
    `,
    directives: [SimpleList]
})
export class UsersList {

    public users:any[] = [
            {id:1, name:'John'},
            {id:2, name:'Bob'}
        ];

    // customize the contents of a row in the list
    getName(user):string { return user.name; }
    // customize the link
    getLink(user):any[] { return ['User', {id:user.id}]; }

}
```
