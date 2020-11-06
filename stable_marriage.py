class User:
    def __init__(self,id="",pref={}):
        self.id=id
        self.pref=pref
class Animal:
    def __init__(self,id="",tags={}):
        self.id=id
        self.tags=tags
def compatibility(u:User,a:Animal):
    r=0
    s=0
    for i in a.tags:
        if i in u.pref:
            r+=u.pref[i]
        else:
            r += 0.5
        s+=1
    return r/s
    '''The default value of preference is assumed 0.5.
    All tags are not of the same sort.
    A weight for different sorts of tags should be used.'''
def make_list(users,animals):
    if len(users)!=len(animals):
        raise Exception("Incommensurate lists!")
    # make user choice order
    ulist=[]
    for i in users:
        l=[]
        jj=0
        for j in animals:
            l.append((jj,compatibility(i,j)))
            jj+=1
        l=sorted(l,key=lambda x:-x[1])
        for k in range(len(l)):
            l[k]=l[k][0]
        ulist.append(l)
    # make animal choice order
    alist=[]
    for i in animals:
        l=[]
        jj=0
        for j in users:
            l.append((jj,compatibility(j,i)))
            jj+=1
        l=sorted(l,key=lambda x:-x[1])
        for k in range(len(l)):
            l[k]=l[k][0]
        alist.append(l)
    return ulist,alist

def stable_marriage(a,b):
    pointers=[0]*len(a)
    choice = [-1] * len(b)
    for i in range(len(a)):
        '''
        j: number of a LHS element
        a[j]: preference list of j
        pointers[j]: indicates the order of consideration (0 for first consideration, 1 for second, etc.)
        choice[j]: what RHS element LHS element a[j] has chosen. If none, -1.
        a[j][pointers[j]]: Current consideration(not just order, but the element itself).
        b[a[j][pointers[j]]].index(j): How the consideration of a[j] thinks of a[j]
        choice.index(x): The LHS element who has chosen RHS element x. 
        '''
        for j in range(len(a)):
            if choice[j]<0:
                if a[j][pointers[j]] not in choice: # Choice is only done by LHS elements that has no RHS element choice
                    # Choose it!
                    choice[j]=a[j][pointers[j]]
                else:
                    c=choice.index(a[j][pointers[j]])
                    if b[a[j][pointers[j]]].index(j)<b[a[c][pointers[c]]].index(c):
                        # Displace choice
                        choice[j] = a[j][pointers[j]]
                        choice[c]=-1
                    else:
                        # Give up this consideration and go on to the next
                        pointers[j]+=1

    print(choice)


matt=User("Hudson",{"dog":0.8,"cat":0.2,"black":0.8,"gold":0.6,"white":0.2})
sfx=User("Xue",{"cat":0.9,"squirrel":0.5,"gold":0.8,"white":0.55,"noisy":0.1})
sarah=User("Mcl",{"cat":0.3,"dog":0.7,"white":0.9,"black":0.1,"clean":0.8,"active":0.25})
kitty=Animal("kitty",{"cat","gold","noisy"})
snoopy=Animal("snoopy",{"dog","black","active"})
baimao=Animal("baimao",{"cat","white","clean"})
print(compatibility(matt,kitty))
users,animals=make_list([matt,sfx,sarah],[kitty,snoopy,baimao])
stable_marriage(users,animals)
